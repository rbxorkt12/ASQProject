import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Node.css';

export const NodeSchema = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

const Node = ({ id, label, x, y }) => {
  return (
    <div id={`node-element-${id}`} className="node-element" style={{ left: x, top: y }}>
      {label}
    </div>
  );
};

Node.propTypes = NodeSchema;

export default Node;