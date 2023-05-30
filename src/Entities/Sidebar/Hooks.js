import { useDispatch, useSelector } from "react-redux";
import { currentNodeWorkspaceSelector, isShowRunningWorkspaceSelector, nodesWorkspaceSelector, searchedNodeWorkspaceSelector, startNodeWorkspaceSelector } from "../Workspace/Slice/Selectors";
import { resetShowRunningWorkspaceAction, selectCurrentNodeWorkspaceAction, selectVisitedNodeWorkspaceAction, setIsShowRunningWorkspaceAction } from "../Workspace/Slice/Actions";

const DFS_STACK = new Set([]);

export function useDFS () {
    const dispatch = useDispatch();
    const startNodeId = useSelector(startNodeWorkspaceSelector);
    const currentNodeId = useSelector(currentNodeWorkspaceSelector);
    const searchedNodeId = useSelector(searchedNodeWorkspaceSelector);
    const nodes = useSelector(nodesWorkspaceSelector);
    const isShowRunning = useSelector(isShowRunningWorkspaceSelector);

    return [
        () => {
            if (!currentNodeId) {
                if (!isShowRunning) {
                    dispatch(selectCurrentNodeWorkspaceAction(startNodeId));
                    dispatch(setIsShowRunningWorkspaceAction(true));
                    DFS_STACK.add(startNodeId);    
                } else {
                    dispatch(resetShowRunningWorkspaceAction());
                    dispatch(setIsShowRunningWorkspaceAction(false));
                }
            } else {
                dispatch(selectVisitedNodeWorkspaceAction(currentNodeId));
                DFS_STACK.delete(currentNodeId);

                if (currentNodeId === searchedNodeId) {
                    dispatch(resetShowRunningWorkspaceAction());
                    dispatch(setIsShowRunningWorkspaceAction(false));
                    return;
                }

                const currentNode = nodes.find(node => node.data.id === +currentNodeId);

                for(const childNodeId of [...currentNode.data.children].reverse()) {
                    if (!nodes.find(node => node.data.id === +childNodeId).wasVisited) {
                        DFS_STACK.has(childNodeId) && DFS_STACK.delete(childNodeId) 
                        childNodeId && DFS_STACK.add(childNodeId);
                    }
                }

                dispatch(selectCurrentNodeWorkspaceAction([...DFS_STACK].pop()));
                console.log(DFS_STACK);
            }
        }
    ];
}
