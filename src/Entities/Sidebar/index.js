import './index.css';
import { AddNodeButtom } from "./Components/AddNodeButtom";
import { DelNodeButtom } from "./Components/DelNodeButtom";
import { AddArcButtom } from './Components/AddAcrButtom';
import { SelectStartNodeButtom } from './Components/SelectStartNodeButtom';
import { SelectSearchedNodeButtom } from './Components/SelectSearchedNodeButtom';
import { NextStepButtom } from './Components/NextStepButtom';
import { ResetShowButtom } from './Components/ResetShowButtom';
import { ResetAllButtom } from './Components/ResetAllButtom';

export function Sidebar () {
    return (
        <div className='sidebarContainer'>
            <AddNodeButtom />
            <DelNodeButtom />
            <AddArcButtom />
            <SelectStartNodeButtom />
            <SelectSearchedNodeButtom />
            <NextStepButtom />
            <ResetShowButtom />
            <ResetAllButtom />
        </div>
    );
}
