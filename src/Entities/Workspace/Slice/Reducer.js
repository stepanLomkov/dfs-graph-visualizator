import { createReducer } from "@reduxjs/toolkit";
import { addNodeWorkspaceAction, delNodeInChildrenWorkspaceAction, delNodeWorkspaceAction, resetAllWorkspaceAction, resetArcAddingIdWorkspaceAction, resetSearchedNodeWorkspaceAction, resetShowRunningWorkspaceAction, resetStartNodeWorkspaceAction, selectCurrentNodeWorkspaceAction, selectFirstNodeForAddingArcWorkspaceAction, selectSearchedNodeWorkspaceAction, selectSecondNodeForAddingArcWorkspaceAction, selectStartNodeWorkspaceAction, selectVisitedNodeWorkspaceAction, setIsShowRunningWorkspaceAction } from "./Actions";

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
            // wasVisited:
        //}
    ],
    arcAddingId: null,
    startNode: null,
    searchedNode: null,
    currentNode: null,
    isShowRunning: false,
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
        .addCase(delNodeInChildrenWorkspaceAction, (reducerState, action) => {
            reducerState.nodes.map(node => {
                if (node.data.children.includes(action.payload)) {
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            children: node.data.children.splice(node.data.children.findIndex(child => child === action.payload), 1),
                        },
                    }
                }
                
                return node;
            });
        })
        .addCase(selectFirstNodeForAddingArcWorkspaceAction, (reducerState, action) => {
            reducerState.arcAddingId = action.payload;
        })
        .addCase(selectSecondNodeForAddingArcWorkspaceAction, (reducerState, action) => {
            reducerState.nodes = [
                ...reducerState.nodes.map(node => {
                    if (node.data.id === +reducerState.arcAddingId && node.data.id !== +action.payload) {
                        return {
                            ...node,
                            data: {
                                ...node.data,
                                children: [ ...new Set([
                                    ...node.data.children,
                                    action.payload,
                                ]) ],
                            }
                        }
                    }

                    return node;
                }),
            ]
        })
        .addCase(resetArcAddingIdWorkspaceAction, (reducerState) => {
            reducerState.arcAddingId = null;
        })
        .addCase(selectStartNodeWorkspaceAction, (reducerState, action) => {
            reducerState.startNode = action.payload;
        })
        .addCase(resetStartNodeWorkspaceAction, (reducerState) => {
            reducerState.startNode = null;
        })
        .addCase(selectSearchedNodeWorkspaceAction, (reducerState, action) => {
            reducerState.searchedNode = action.payload;
        })
        .addCase(resetSearchedNodeWorkspaceAction, (reducerState) => {
            reducerState.searchedNode = null;
        })

        .addCase(selectVisitedNodeWorkspaceAction, (reducerState, action) => {
            reducerState.nodes = [
                ...reducerState.nodes.map(node => {
                    if (node.data.id === +action.payload) {
                        return {
                            ...node,
                            wasVisited: true,
                        }
                    }

                    return node;
                }),
            ];
        })
        .addCase(selectCurrentNodeWorkspaceAction, (reducerState, action) => {
            reducerState.currentNode = action.payload;
        })
        .addCase(setIsShowRunningWorkspaceAction, (reducerState, action) => {
            reducerState.isShowRunning = action.payload;
        })
        .addCase(resetShowRunningWorkspaceAction, (reducerState) => {
            return {
                ...reducerState,
                currentNode: null,
                nodes: [
                    ...reducerState.nodes.map(node => {
                        if (node.wasVisited) {
                            return {
                                ...node,
                                wasVisited: false,
                            }
                        }

                        return node;
                    }),
                ]
            }
        })
        .addCase(resetAllWorkspaceAction, () => {
            UNID = 1;
            return INITIAL_SLICE_STATE;
        })
})