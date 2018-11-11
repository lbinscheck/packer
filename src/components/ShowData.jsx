/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data from '../data/data.json';
import './css/showData.css';


/**
 * [Container Component.
 * Displays the currently calculated volumes of bags and boxes.]
 * @extends Component
 */
class ShowData extends Component {
  /**
 * [boxVol calculates the volume of the box based on the choosen measurements.]
 * @param  {[Number]} length [site length]
 * @return {[String]}
 */
  static boxVol(length) {
    const volume = length ** 3;
    return volume.toLocaleString('fi');
  }

  /**
   * [Sets the imported json Object to a variable.]
   */
  constructor() {
    super();
    this.bag = data;
  }

  /**
   * [bagsVol calculates the volume of the bags based on the fixed measurements
   * and the quantity.]
   * @param  {[String]} index    [index will be 'small','medium','large','box']
   * @param  {[Number]} bagCount [quantity of bags]
   * @return {[String]}
   */
  bagsVol(index, bagCount) {
    const volume = (this.bag[index].height
      * this.bag[index].width
      * this.bag[index].length)
      * bagCount;
    return volume.toLocaleString('fi');
  }

  render() {
    return (
      <div className="card">
        <div className="showdataWrapper">
          <div className="showdataInfo">
            <p>
              {'Volume of 200g bags:'}
            </p>
            <strong>
              {`${this.bagsVol('small', this.props.smallcount)} cm`}
&#179;
            </strong>
          </div>
          <div className="showdataInfo">
            <p>
              {'Volume of 400g bags:'}
            </p>
            <strong>
              {`${this.bagsVol('medium', this.props.mediumcount)} cm`}
&#179;
            </strong>
          </div>
          <div className="showdataInfo">
            <p>
              {'Volume of 1000g bags:'}
            </p>
            <strong>
              {`${this.bagsVol('large', this.props.largecount)} cm`}
&#179;
            </strong>
          </div>
          <div className="showdataInfo">
            <p>
              {'Volume of box:'}
            </p>
            <strong>
              {`${ShowData.boxVol(this.props.boxlength)} cm`}
&#179;
            </strong>
          </div>
        </div>
      </div>
    );
  }
}

ShowData.propTypes = {
  smallcount: PropTypes.number.isRequired,
  mediumcount: PropTypes.number.isRequired,
  largecount: PropTypes.number.isRequired,
  boxlength: PropTypes.number.isRequired,
};

/**
 * [actually maps the received state to props]
 * @param  {[Object]} state [current state]
 * @return {[Object]}       [mapped props]
 */
const mapStateToProps = state => ({
  smallcount: state.smallcount,
  mediumcount: state.mediumcount,
  largecount: state.largecount,
  boxlength: state.boxlength,
  boxescount: state.boxescount,
});
export default connect(mapStateToProps)(ShowData);
