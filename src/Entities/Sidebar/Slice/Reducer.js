import { createReducer } from "@reduxjs/toolkit"
import { activateEditGraphStatusSidebarAction } from "./Actions"

const INITIAL_SLICE_STATE = {
    editGraphStatus: null,
}

export const sidebarReducer = createReducer(INITIAL_SLICE_STATE, (builder) => {
    builder.addCase(activateEditGraphStatusSidebarAction, (reducerState, action) => {
        reducerState.editGraphStatus = action.payload;
    })
})