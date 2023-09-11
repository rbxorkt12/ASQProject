import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Edge.css';

const EdgeSchema = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

const Edge = ({ id, source, target }) => {
  return (
    <div id={`edge-element-${id}`} className="edge-element">
      <div className="edge-source">{source}</div>
      <div className="edge-target">{target}</div>
    </div>
  );
};

Edge.propTypes = EdgeSchema;

export default Edge;