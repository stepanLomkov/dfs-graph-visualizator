import { createReducer } from "@reduxjs/toolkit"
import { testSidebarAction } from "./Actions"

const INITIAL_SLICE_STATE = {
    data: 'init',
}

export const sidebarReducer = createReducer(INITIAL_SLICE_STATE, (builder) => {
    builder.addCase(testSidebarAction, (reducerState, action) => {
        reducerState.data = action.payload;
    })
})