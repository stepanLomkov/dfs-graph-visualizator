import './index.css';
import { AddNodeButtom } from "./Components/AddNodeButtom";
import { DelNodeButtom } from "./Components/DelNodeButtom";
import { AddArcButtom } from './Components/AddAcrButtom';

export function Sidebar () {
    return (
        <div className='sidebarContainer'>
            <AddNodeButtom />
            <DelNodeButtom />
            <AddArcButtom />
        </div>
    );
}
