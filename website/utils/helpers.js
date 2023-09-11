// website/utils/helpers.js

export function formatNodeData(nodeData) {
  return {
    id: nodeData.id,
    label: nodeData.label,
    x: nodeData.x,
    y: nodeData.y,
  };
}

export function formatEdgeData(edgeData) {
  return {
    id: edgeData.id,
    source: edgeData.source,
    target: edgeData.target,
  };
}

export function validateNodeData(nodeData) {
  if (!nodeData.id || !nodeData.label || nodeData.x === undefined || nodeData.y === undefined) {
    return false;
  }
  return true;
}

export function validateEdgeData(edgeData) {
  if (!edgeData.id || !edgeData.source || !edgeData.target) {
    return false;
  }
  return true;
}