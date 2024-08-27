import { AccountPagesState } from '../types';
export declare const sliceAccountPages: import("@reduxjs/toolkit").Slice<AccountPagesState, {
    addDataPages(state: import("immer/dist/internal").WritableDraft<AccountPagesState>, action: {
        payload: any;
        type: string;
    }): void;
    removeLastTodo(state: import("immer/dist/internal").WritableDraft<AccountPagesState>, action: {
        payload: any;
        type: string;
    }): void;
    getStatus(state: import("immer/dist/internal").WritableDraft<AccountPagesState>, action: {
        payload: any;
        type: string;
    }): void;
    addSteper(state: import("immer/dist/internal").WritableDraft<AccountPagesState>, action: {
        payload: any;
        type: string;
    }): void;
    addFromForm(state: import("immer/dist/internal").WritableDraft<AccountPagesState>, action: {
        payload: any;
        type: string;
    }): void;
    findSearch(state: import("immer/dist/internal").WritableDraft<AccountPagesState>, action: {
        payload: any;
        type: string;
    }): import("immer/dist/internal").WritableDraft<AccountPagesState>;
}, "accountPages">;
declare const _default: import("redux").Reducer<AccountPagesState>;
export default _default;
export declare const removeLastTodo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "accountPages/removeLastTodo">, addDataPages: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "accountPages/addDataPages">, getStatus: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "accountPages/getStatus">, addFromForm: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "accountPages/addFromForm">, addSteper: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "accountPages/addSteper">, findSearch: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "accountPages/findSearch">;
//# sourceMappingURL=globalSlice.d.ts.map