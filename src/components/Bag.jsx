import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

/**
 * [Presentational component
 * Passes title and index props down to Counter]
 * @param {[Object]} props [index, height, width, length]
 */
const Bag = ({
  name, height, width, length, index,
}) => (
  <div className="card">
    <h1>{`${name} coffee bag`}</h1>
    <div className="cardInfo">
      <p>{`height: ${height} cm`}</p>
      <p>{`width: ${width} cm`}</p>
      <p>{`length: ${length} cm`}</p>
    </div>
    <Counter index={index} title="Enter number of bags:" />
  </div>
);

Bag.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default Bag;
