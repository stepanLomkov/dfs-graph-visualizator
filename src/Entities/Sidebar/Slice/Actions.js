import { createAction } from "@reduxjs/toolkit";

const ACTION_NAMESPACE = 'SIDEBAR';

export const testSidebarAction = createAction(`${ACTION_NAMESPACE}_TEST`);
