import './index.css';
import { AddNodeButtom } from "./Components/AddNodeButtom";
import { DelNodeButtom } from "./Components/DelNodeButtom";
import { AddArcButtom } from './Components/AddAcrButtom';
import { SelectStartNodeButtom } from './Components/SelectStartNodeButtom';
import { SelectSearchedNodeButtom } from './Components/SelectSearchedNodeButtom';

export function Sidebar () {
    return (
        <div className='sidebarContainer'>
            <AddNodeButtom />
            <DelNodeButtom />
            <AddArcButtom />
            <SelectStartNodeButtom />
            <SelectSearchedNodeButtom />
        </div>
    );
}
