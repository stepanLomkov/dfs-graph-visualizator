import { useSelector } from "react-redux";
import { editGraphStatusSidebarSelector } from "../../../Sidebar/Slice/Selectors";
import { ACTION_HINTS } from "./Consts";
import "./index.css";

export function ActionHint () {
    const editGraphStatus = useSelector(editGraphStatusSidebarSelector);

    return !!editGraphStatus ? (
        <div className="actionHint">
            {ACTION_HINTS[editGraphStatus]}
        </div>
    ) : null;
}