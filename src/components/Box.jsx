import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

/**
 * [Presentational component.
 * Passes index and title props down to Counter]
 * @param {[Object]} props [index, height, width, length]
 */
const Box = ({ index }) => (
  <div className="card">
    <h1>Box</h1>
    <div className="cardInfo">
      <p>Boxes are cubic.</p>
    </div>
    <Counter index={index} title="Enter size: 30cm - 100cm" cm=" cm" />
  </div>
);

Box.propTypes = {
  index: PropTypes.string.isRequired,
};

export default Box;
