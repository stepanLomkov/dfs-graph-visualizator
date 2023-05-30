import { useDispatch } from "react-redux";
import { resetShowRunningWorkspaceAction } from "../../../Workspace/Slice/Actions";

export function ResetShowButtom () {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetShowRunningWorkspaceAction());
    }

    return (
        <div onClick={ handleClick }>Сбросить показ</div>
    );
}