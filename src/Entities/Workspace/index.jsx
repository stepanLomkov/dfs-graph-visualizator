import { useDispatch, useSelector } from 'react-redux';
import { ActionHint } from './Components/ActionHint';
import './index.css';
import { addNodeWorkspaceAction, delNodeInChildrenWorkspaceAction, delNodeWorkspaceAction, resetArcAddingIdWorkspaceAction, resetSearchedNodeWorkspaceAction, resetStartNodeWorkspaceAction, selectFirstNodeForAddingArcWorkspaceAction, selectSearchedNodeWorkspaceAction, selectSecondNodeForAddingArcWorkspaceAction, selectStartNodeWorkspaceAction } from './Slice/Actions';
import { editGraphStatusSidebarSelector } from '../Sidebar/Slice/Selectors';
import { EDIT_GRAPH_STATUSES } from '../../Common/Consts';
import { activateEditGraphStatusSidebarAction } from '../Sidebar/Slice/Actions';
import { arcAddingIdWorkspaceSelector, nodesWorkspaceSelector, searchedNodeWorkspaceSelector, startNodeWorkspaceSelector } from './Slice/Selectors';
import { useEffect, useRef } from 'react';

export function Workspace () {
    const dispatch = useDispatch();
    const editGraphStatus = useSelector(editGraphStatusSidebarSelector);
    const nodes = useSelector(nodesWorkspaceSelector);
    const arcAddigId = useSelector(arcAddingIdWorkspaceSelector);
    const startNodeId = useSelector(startNodeWorkspaceSelector);
    const searchedNodeId = useSelector(searchedNodeWorkspaceSelector);
    const workspaceRef = useRef();

    useEffect(() => {
        return () => {
            if (editGraphStatus === EDIT_GRAPH_STATUSES.ADD_ARC) {
                dispatch(resetArcAddingIdWorkspaceAction());
            }
        }
    }, [editGraphStatus]);

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
        const nodeId = e.target.id;

        if (editGraphStatus === EDIT_GRAPH_STATUSES.DEL_NODE) {
            dispatch(delNodeWorkspaceAction(nodeId));
            dispatch(delNodeInChildrenWorkspaceAction(nodeId));
            nodeId === startNodeId && dispatch(resetStartNodeWorkspaceAction());
            nodeId === searchedNodeId && dispatch(resetSearchedNodeWorkspaceAction());
            dispatch(activateEditGraphStatusSidebarAction(null));
        }

        if (editGraphStatus === EDIT_GRAPH_STATUSES.ADD_ARC) {
            if (!arcAddigId) {
                dispatch(selectFirstNodeForAddingArcWorkspaceAction(nodeId));
            } else {
                dispatch(selectSecondNodeForAddingArcWorkspaceAction(nodeId));
                dispatch(activateEditGraphStatusSidebarAction(null));
            }
        }

        if (editGraphStatus === EDIT_GRAPH_STATUSES.SELECT_START_NODE) {
            dispatch(selectStartNodeWorkspaceAction(nodeId));
            dispatch(activateEditGraphStatusSidebarAction(null));
        }

        if (editGraphStatus === EDIT_GRAPH_STATUSES.SELECT_SEARCHED_NODE) {
            dispatch(selectSearchedNodeWorkspaceAction(nodeId));
            dispatch(activateEditGraphStatusSidebarAction(null));
        }
    }

    return (
        <div
            className='workspaceContainer'
            onClick={ handleWorkspaceClick }
            ref={ workspaceRef }
        >
            <ActionHint />

            {nodes.length > 0 ? nodes.map(({data, position}) => {
                return (
                    <div
                        id={ data.id }
                        key={ data.id }
                        onClick={ handleNodeClick }
                        style={{
                            position: 'fixed',
                            top: position.y, 
                            left: position.x,
                            borderRadius: '50%',
                            border: 'solid 2px #000',
                            height: '30px',
                            width: '30px',
                            background: data.id === +startNodeId ? 'blue' : 'white',
                            borderColor: data.id === +searchedNodeId ? 'green' : 'black',
                        }}
                    >
                        {data.id}
                    </div>
                );
            }) : null}

            <svg
                style={ { height: '100%', width: '100%' }}
            >
                {nodes.length > 0 ? nodes.map(({data, position}) => {
                    return data.children.length > 0 ? data.children.map(child => {
                        const childNode = nodes.find(node => node.data.id === +child);
                        // 15 - default node radius 
                        const nodeRadius = 15;
                        const x1 = position.x - workspaceRef.current.offsetLeft + nodeRadius;
                        const y1 = position.y - workspaceRef.current.offsetTop + nodeRadius;
                        const x2 = childNode.position.x - workspaceRef.current.offsetLeft + nodeRadius
                        const y2 = childNode.position.y - workspaceRef.current.offsetTop + nodeRadius;

                        return (
                                <g
                                    style={{stroke: "#000", strokeWidth: "2px" }}
                                    id={`${data.id}-${childNode.data.id}`}
                                    key={`${data.id}-${childNode.data.id}`}
                                >         
                                    <defs>
                                        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                                        refX="17" refY="3.5" orient="auto">
                                            <polygon points="0 0, 10 3.5, 0 7" />
                                        </marker>
                                    </defs>
                                    <line x1={ x1 } y1={ y1 } x2={ x2 } y2={ y2 } markerEnd="url(#arrowhead)" />
                                </g>
                        )
                    }) : null;
                }) : null}
            </svg>
        </div>
    );
}
