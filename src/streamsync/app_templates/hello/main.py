import streamsync as ss
import pandas as pd
import numpy as np
import plotly.express as px
import statistics

from streamsync.core import StreamsyncState

# EVENT HANDLERS


def handle_timer_tick(state: StreamsyncState):
    df = state["random_df"]
    for i in range(5):
        df[f'pgcf_{i+1}'] = np.around(np.random.rand(10, 1), decimals=9)
    state["random_df"] = df


def update(state, session):
    main_df = _get_main_df()
    main_df = main_df[main_df['length_cm'] >= state["filter"]["min_length"]]
    main_df = main_df[main_df['weight_g'] >= state["filter"]["min_weight"]]
    state["main_df"] = main_df
    state["session"] = session
    _update_metrics(state)
    _update_role_chart(state)
    _update_scatter_chart(state)


def handle_story_download(state):
    data = ss.pack_file("assets/story.txt", "text/plain")
    file_name = "hacker_pigeons.txt"
    state.file_download(data, file_name)


def handle_open_streamsync_website(state):
    state.open_url("https://streamsync.cloud")

# LOAD / GENERATE DATA


def _generate_random_df():
    data = np.around(np.random.rand(10, 5), decimals=9)
    column_names = [f'pgcf_{i+1}' for i in range(5)]
    random_df = pd.DataFrame(data, columns=column_names)
    return random_df


def _get_main_df():
    main_df = pd.read_csv("assets/main_df.csv")
    return main_df


def _get_highlighted_members():
    sample_df = _get_main_df().sample(3)
    sample = sample_df.to_dict("records")
    return sample


def _get_story_text():
    with open("assets/story.txt", "r") as f:
        return f.read()

# UPDATES


def _update_metrics(state):
    main_df = state["main_df"]
    bmi_list = (main_df['weight_g'] / 1000) / \
        ((main_df['length_cm'] / 100) ** 2)
    bmi = statistics.mean(bmi_list)
    diversity_index = main_df['feather_color'].nunique()/len(main_df)
    metrics = {
        "average_weight": round(main_df['weight_g'].mean(), 0),
        "average_length": round(main_df['length_cm'].mean(), 0),
        "average_bmi": round(bmi, 2),
        "diversity": round(diversity_index, 2),
    }
    metrics.update({
        "average_weight_note": "+Acceptable",
        "average_length_note": "+Acceptable",
        "average_bmi_note": "-Overweight" if metrics["average_bmi"] >= 5.2 else "+Acceptable",
        "diversity_note": "-Not diverse" if metrics["diversity"] < 0.8 else "+Acceptable",
    })
    state["metrics"] = metrics


def _update_role_chart(state):
    main_df = state["main_df"]
    custom_color_scale = ["#dd43df", "#e057e7",
                          "#e36bef", "#e680f7", "#e994ff"]
    role_counts = main_df['role'].value_counts().reset_index()
    role_counts.columns = ['role', 'count']
    fig = px.bar(role_counts, x='role', y='count', color='role',
                 color_discrete_sequence=custom_color_scale)
    fig.update_layout(
        margin=dict(l=20, r=20, t=20, b=50),
        showlegend=False
    )
    state["role_chart"] = fig


def _update_scatter_chart(state):
    main_df = state["main_df"]
    average_role_data = main_df.groupby("role").agg(
        {"length_cm": "mean", "weight_g": "mean"}).reset_index()
    fig = px.scatter(average_role_data, x="length_cm", y="weight_g",
                     color="role", height=400, size_max=10, size="weight_g")
    fig.update_layout(
        margin=dict(l=20, r=20, t=20, b=50),
        showlegend=False
    )
    state["scatter_chart"] = fig

# STATE INIT


initial_state = ss.init_state({
    "main_df": _get_main_df(),
    "highlighted_members": _get_highlighted_members(),
    "random_df": _generate_random_df(),
    "hue_rotation": 26,
    "story": {
        "text": _get_story_text(),  # For display
    },
    "filter": {
        "min_length": 25,
        "min_weight": 300,
    },
    "metrics": {}
})

update(initial_state, None)
