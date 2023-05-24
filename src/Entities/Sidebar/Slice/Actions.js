import { createAction } from "@reduxjs/toolkit";

const ACTION_NAMESPACE = 'SIDEBAR';

export const activateEditGraphStatusSidebarAction = createAction(`${ACTION_NAMESPACE}_ACTIVATE_STATUS`);
