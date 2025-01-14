import { ComputedRef, InjectionKey, Ref, VNode } from "vue";
import {
	BuilderManager,
	Component,
	Core,
	InstancePath,
	InstancePathItem,
} from "./streamsyncTypes";

export default {
	core: Symbol() as InjectionKey<Core>,
	builderManager: Symbol() as InjectionKey<BuilderManager>,
	evaluatedFields: Symbol() as InjectionKey<ComputedRef<Record<string, any>>>,
	componentId: Symbol() as InjectionKey<Component["id"]>,
	isBeingEdited: Symbol() as InjectionKey<Ref<boolean>>,
	getChildrenVNodes: Symbol() as InjectionKey<
		(instanceNumber?: InstancePathItem["instanceNumber"]) => VNode[]
	>,
	renderProxiedComponent: Symbol() as InjectionKey<
		(
			componentId: Component["id"],
			instanceNumber?: InstancePathItem["instanceNumber"]
		) => VNode
	>,
	instancePath: Symbol() as InjectionKey<InstancePath>,
	instanceData: Symbol() as InjectionKey<Ref[]>,
};
