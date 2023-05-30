import { useDispatch } from "react-redux";
import { resetAllWorkspaceAction } from "../../../Workspace/Slice/Actions";

export function ResetAllButton () {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetAllWorkspaceAction());
    }

    return (
        <button onClick={ handleClick }>Сбросить все</button>
    );
}