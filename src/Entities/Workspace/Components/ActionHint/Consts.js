import { EDIT_GRAPH_STATUSES } from "../../../../Common/Consts";

export const ACTION_HINTS = Object.freeze({
   [EDIT_GRAPH_STATUSES.ADD_NODE]: 'Выберите место добавления узла',
   [EDIT_GRAPH_STATUSES.DEL_NODE]: 'Выберите узел, который хотите удалить',
   [`${EDIT_GRAPH_STATUSES.ADD_ARC}_FIRST`]: 'Выберите первый узел дуги',
   [`${EDIT_GRAPH_STATUSES.ADD_ARC}_SECOND`]: 'Выберите второй узел дуги',
   [EDIT_GRAPH_STATUSES.SELECT_START_NODE]: 'Выберите начальный узел',
});
