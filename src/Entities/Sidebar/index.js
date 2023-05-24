import './index.css';
import { AddNodeButtom } from "./Components/AddNodeButtom";
import { DelNodeButtom } from "./Components/DelNodeButtom";

export function Sidebar () {
    return (
        <div className='sidebarContainer'>
            <AddNodeButtom />
            <DelNodeButtom />
        </div>
    );
}
