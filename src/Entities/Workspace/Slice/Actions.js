import { createAction } from "@reduxjs/toolkit";

const ACTION_NAMESPACE = 'WORKSPACE';

export const addNodeWorkspaceAction = createAction(`${ACTION_NAMESPACE}_ADD_NODE`);
export const delNodeWorkspaceAction = createAction(`${ACTION_NAMESPACE}_DEL_NODE`);
export const delNodeInChildrenWorkspaceAction = createAction(`${ACTION_NAMESPACE}_DEL_NODE_IN_CHILDREN`);
export const selectFirstNodeForAddingArcWorkspaceAction = createAction(`${ACTION_NAMESPACE}_SELECT_FIRST_NODE_FOR_ADIING_ARC`);
export const selectSecondNodeForAddingArcWorkspaceAction = createAction(`${ACTION_NAMESPACE}_SELECT_SECOND_NODE_FOR_ADIING_ARC`);
export const resetArcAddingIdWorkspaceAction = createAction(`${ACTION_NAMESPACE}_RESET_ARC_ADDING_ID`);
export const selectStartNodeWorkspaceAction = createAction(`${ACTION_NAMESPACE}_SELECT_START_NODE`);
export const resetStartNodeWorkspaceAction = createAction(`${ACTION_NAMESPACE}_RESET_START_NODE`);
