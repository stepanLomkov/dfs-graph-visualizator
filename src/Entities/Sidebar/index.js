import './index.css';
import { AddNodeButton } from "./Components/AddNodeButton";
import { DelNodeButton } from "./Components/DelNodeButton";
import { AddArcButton } from './Components/AddAcrButton';
import { SelectStartNodeButton } from './Components/SelectStartNodeButton';
import { SelectSearchedNodeButton } from './Components/SelectSearchedNodeButton';
import { NextStepButton } from './Components/NextStepButton';
import { ResetShowButton } from './Components/ResetShowButton';
import { ResetAllButton } from './Components/ResetAllButton';

export function Sidebar () {
    return (
        <div className='sidebarContainer'>
            <AddNodeButton />
            <DelNodeButton />
            <AddArcButton />
            <SelectStartNodeButton />
            <SelectSearchedNodeButton />
            <NextStepButton />
            <ResetShowButton />
            <ResetAllButton />
        </div>
    );
}
