import { createReducer } from "@reduxjs/toolkit";
import { addNodeWorkspaceAction, delNodeWorkspaceAction } from "./Actions";

let UNID = 1;

const INITIAL_SLICE_STATE = {
    nodes: [
        //{
            // data: {
                // id:
                // children: [id]
            //}
            // position: {
                // x:
                // y:
            //}
        //}
    ],
}

export const workspaceReducer = createReducer(INITIAL_SLICE_STATE, (builder) => {
    builder
        .addCase(addNodeWorkspaceAction, (reducerState, action) => {
            reducerState.nodes = [
                ...reducerState.nodes,
                {
                    data: {
                        id: UNID++,
                        children: [],
                    },
                    position: {
                        ...action.payload.position,
                    }
                },
            ];
        })
        .addCase(delNodeWorkspaceAction, (reducerState, action) => {
            reducerState.nodes.splice(reducerState.nodes.findIndex(node => node.data.id === +action.payload), 1);
        })
})