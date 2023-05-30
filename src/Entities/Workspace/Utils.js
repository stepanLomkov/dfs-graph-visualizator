export function getBackground (nodeId, startNodeId, wasVisited, wasSearched) {
    if (wasSearched) {
        return 'green';
    }

    if (wasVisited) {
        return 'orange';
    }
    
    if (nodeId === startNodeId) {
        return 'blue';
    }

    return 'white';
}

export function getBorderColor (nodeId, currentNodeId, searchedNodeId) {
    if (nodeId === currentNodeId) {
        return 'orange';
    }
    
    if (nodeId === searchedNodeId) {
        return 'green';
    }

    return 'black';
}
