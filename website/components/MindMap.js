import React, { useState } from 'react';
import Node from './Node';
import Edge from './Edge';
import { createNode, createEdge } from '../utils/api';
import '../styles/MindMap.css';

const MindMap = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const handleNodeCreate = async (nodeData) => {
    const response = await createNode(nodeData);
    if (response.status === 'NODE_CREATE_SUCCESS') {
      setNodes([...nodes, response.data]);
    }
  };

  const handleEdgeCreate = async (edgeData) => {
    const response = await createEdge(edgeData);
    if (response.status === 'EDGE_CREATE_SUCCESS') {
      setEdges([...edges, response.data]);
    }
  };

  return (
    <div id="mindmap-container">
      {nodes.map((node) => (
        <Node key={node.id} data={node} onCreate={handleNodeCreate} />
      ))}
      {edges.map((edge) => (
        <Edge key={edge.id} data={edge} onCreate={handleEdgeCreate} />
      ))}
    </div>
  );
};

export default MindMap;