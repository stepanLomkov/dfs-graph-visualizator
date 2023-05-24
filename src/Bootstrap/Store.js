import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sidebarReducer } from "../Entities/Sidebar/Slice/Reducer";

const reducer = combineReducers({
    sidebar: sidebarReducer,
})

export const store = configureStore({ reducer });
