import { useDispatch, useSelector } from "react-redux";
import { sidebarSelector } from "./Slice/Selectors";
import { testSidebarAction } from "./Slice/Actions";

export function Sidebar () {
    const dispatch = useDispatch();
    const data = useSelector(sidebarSelector);

    const handleClick = () => {
        dispatch(testSidebarAction('newValue'));
    }

    return (
        <>
            Sidebar
            data: {data}
            <div onClick={ handleClick }>test btm</div>
        </>
    );
}
