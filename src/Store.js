import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sidebarReducer } from "./Entities/Sidebar/Slice/Reducer";
import { workspaceReducer } from "./Entities/Workspace/Slice/Reducer";

const reducer = combineReducers({
    sidebar: sidebarReducer,
    workspace: workspaceReducer,
})

export const store = configureStore({ reducer });
