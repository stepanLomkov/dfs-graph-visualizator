import { useDispatch, useSelector } from 'react-redux';
import { ActionHint } from './Components/ActionHint';
import './index.css';
import { addNodeWorkspaceAction, delNodeWorkspaceAction } from './Slice/Actions';
import { editGraphStatusSidebarSelector } from '../Sidebar/Slice/Selectors';
import { EDIT_GRAPH_STATUSES } from '../../Common/Consts';
import { activateEditGraphStatusSidebarAction } from '../Sidebar/Slice/Actions';
import { nodesWorkspaceSelector } from './Slice/Selectors';

export function Workspace () {
    const dispatch = useDispatch();
    const editGraphStatus = useSelector(editGraphStatusSidebarSelector);
    const nodes = useSelector(nodesWorkspaceSelector);

    const handleWorkspaceClick = (e) => {
        if (editGraphStatus === EDIT_GRAPH_STATUSES.ADD_NODE) {
            dispatch(addNodeWorkspaceAction({
                position: {
                    x: e.clientX,
                    y: e.clientY,
                },
            }));
            dispatch(activateEditGraphStatusSidebarAction(null));
        }
    }

    const handleNodeClick = (e) => {
        e.preventDefault();
        if (editGraphStatus === EDIT_GRAPH_STATUSES.DEL_NODE) {
            dispatch(delNodeWorkspaceAction(e.target.id));
            dispatch(activateEditGraphStatusSidebarAction(null));
        }
    }

    return (
        <div
            className='workspaceContainer'
            onClick={ handleWorkspaceClick }
        >
            <ActionHint />

            {nodes.length > 0 ? nodes.map(({data, position}) => {
                return (
                    <div
                        id={data.id}
                        onClick={ handleNodeClick }
                        style={{ position: 'fixed', top: position.y, left: position.x, borderRadius: '50%', border: 'solid 2px #000', height: '30px', width: '30px' }}
                    >
                        {data.id}
                    </div>
                );
            }) : null}
        </div>
    );
}
