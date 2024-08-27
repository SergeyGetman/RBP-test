declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    globalState: import("../types").AccountPagesState;
}>, import("redux").AnyAction>;
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
    globalState: import("../types").AccountPagesState;
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<import("redux").CombinedState<{
    globalState: import("../types").AccountPagesState;
}>, import("redux").AnyAction>]>>;
export default rootReducer;
//# sourceMappingURL=index.d.ts.map