import { useDispatch, useSelector } from "react-redux";
import { activateEditGraphStatusSidebarAction } from "../../Slice/Actions";
import { EDIT_GRAPH_STATUSES } from "../../../../Common/Consts";
import { editGraphStatusSidebarSelector } from "../../Slice/Selectors";

const currentEditGraphStatus = EDIT_GRAPH_STATUSES.SELECT_START_NODE;

export function SelectStartNodeButton () {
    const dispatch = useDispatch();
    const editGraphStatus = useSelector(editGraphStatusSidebarSelector);

    const handleClick = () => {
        dispatch(activateEditGraphStatusSidebarAction(editGraphStatus === currentEditGraphStatus ? null : currentEditGraphStatus));
    }

    return (
        <button onClick={ handleClick }>Выбрать начальный узел</button>
    );
}