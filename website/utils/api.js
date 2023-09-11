import axios from 'axios';

const NODE_CREATE_SUCCESS = 'NODE_CREATE_SUCCESS';
const NODE_CREATE_FAIL = 'NODE_CREATE_FAIL';
const EDGE_CREATE_SUCCESS = 'EDGE_CREATE_SUCCESS';
const EDGE_CREATE_FAIL = 'EDGE_CREATE_FAIL';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

export const createNode = async (nodeData) => {
  try {
    const response = await api.post('/nodes', nodeData);
    if (response.status === 201) {
      return { type: NODE_CREATE_SUCCESS, payload: response.data };
    } else {
      return { type: NODE_CREATE_FAIL, payload: response.data };
    }
  } catch (error) {
    return { type: NODE_CREATE_FAIL, payload: error.message };
  }
};

export const createEdge = async (edgeData) => {
  try {
    const response = await api.post('/edges', edgeData);
    if (response.status === 201) {
      return { type: EDGE_CREATE_SUCCESS, payload: response.data };
    } else {
      return { type: EDGE_CREATE_FAIL, payload: response.data };
    }
  } catch (error) {
    return { type: EDGE_CREATE_FAIL, payload: error.message };
  }
};