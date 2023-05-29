import { useDispatch, useSelector } from "react-redux";
import { activateEditGraphStatusSidebarAction } from "../../Slice/Actions";
import { EDIT_GRAPH_STATUSES } from "../../../../Common/Consts";
import { editGraphStatusSidebarSelector } from "../../Slice/Selectors";

const currentEditGraphStatus = EDIT_GRAPH_STATUSES.SELECT_SEARCHED_NODE;

export function SelectSearchedNodeButtom () {
    const dispatch = useDispatch();
    const editGraphStatus = useSelector(editGraphStatusSidebarSelector);

    const handleClick = () => {
        dispatch(activateEditGraphStatusSidebarAction(editGraphStatus === currentEditGraphStatus ? null : currentEditGraphStatus));
    }

    return (
        <div onClick={ handleClick }>Выбрать искомый узел</div>
    );
}