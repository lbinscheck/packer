/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

/**
 * [Presentational component
 * Passes title and index props down to Counter]
 * @param {[Object]} props [index, height, width, length]
 */
const Bag = props => (
  <div className="card">
    <h1>{`${props.name} coffee bag`}</h1>
    <div className="cardInfo">
      <p>{`height: ${props.height} cm`}</p>
      <p>{`width: ${props.width} cm`}</p>
      <p>{`length: ${props.length} cm`}</p>
    </div>
    <Counter index={props.index} title="Enter number of bags:" />
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
