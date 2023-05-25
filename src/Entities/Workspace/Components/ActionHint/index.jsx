import { useSelector } from "react-redux";
import { editGraphStatusSidebarSelector } from "../../../Sidebar/Slice/Selectors";
import { ACTION_HINTS } from "./Consts";
import { arcAddingIdWorkspaceSelector } from "../../Slice/Selectors";
import "./index.css";
import { EDIT_GRAPH_STATUSES } from "../../../../Common/Consts";


export function ActionHint () {
    const editGraphStatus = useSelector(editGraphStatusSidebarSelector);
    const arcAddigId = useSelector(arcAddingIdWorkspaceSelector);

    const textMessage = editGraphStatus === EDIT_GRAPH_STATUSES.ADD_ARC ? ACTION_HINTS[`${editGraphStatus}${arcAddigId ? '_SECOND' : '_FIRST' }`] : ACTION_HINTS[editGraphStatus];

    return !!editGraphStatus ? (
        <div className="actionHint">
            {textMessage}
        </div>
    ) : null;
}