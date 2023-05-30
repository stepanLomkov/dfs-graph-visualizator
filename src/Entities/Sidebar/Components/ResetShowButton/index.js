import { useDispatch } from "react-redux";
import { resetShowRunningWorkspaceAction } from "../../../Workspace/Slice/Actions";

export function ResetShowButton () {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetShowRunningWorkspaceAction());
    }

    return (
        <button onClick={ handleClick }>Сбросить показ</button>
    );
}