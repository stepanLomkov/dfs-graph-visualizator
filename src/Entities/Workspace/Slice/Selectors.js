export function nodesWorkspaceSelector ({ workspace }) {
    return workspace.nodes;
}

export function arcAddingIdWorkspaceSelector ({ workspace }) {
    return workspace.arcAddingId;
}

export function startNodeWorkspaceSelector ({ workspace }) {
    return workspace.startNode;
}

export function searchedNodeWorkspaceSelector ({ workspace }) {
    return workspace.searchedNode;
}

export function currentNodeWorkspaceSelector ({ workspace }) {
    return workspace.currentNode;
}

export function isShowRunningWorkspaceSelector ({ workspace }) {
    return workspace.isShowRunning;
}