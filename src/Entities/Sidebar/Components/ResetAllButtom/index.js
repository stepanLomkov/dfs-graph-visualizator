import { useDispatch } from "react-redux";
import { resetAllWorkspaceAction } from "../../../Workspace/Slice/Actions";

export function ResetAllButtom () {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetAllWorkspaceAction());
    }

    return (
        <div onClick={ handleClick }>Сбросить все</div>
    );
}