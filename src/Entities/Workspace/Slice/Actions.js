import { createAction } from "@reduxjs/toolkit";

const ACTION_NAMESPACE = 'WORKSPACE';

export const addNodeWorkspaceAction = createAction(`${ACTION_NAMESPACE}_ADD_NODE`);

export const delNodeWorkspaceAction = createAction(`${ACTION_NAMESPACE}_DEL_NODE`);
