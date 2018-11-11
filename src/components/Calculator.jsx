/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { boxesCount, boxLengthChange } from '../actions';
import Packer from '../model/Packer';
import './css/calculator.css';

/**
 * [Container Component
 * Starts the calculation of needed boxes.]
 * @extends Component
 */
class Calculator extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * [handleClick dispatches the boxesCount action, which receives the
   * calculated box number. The number is returned by the function
   * getNumberOfNeededBoxes, which is a method of the class BoxPacker.
   * Before the dispatch is executed, the boxlength will be set to 30 if it was
   * received smaller.]
   */
  handleClick() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.boxlength >= 30) {
      const boxPacker = new Packer(
        this.props.smallcount,
        this.props.mediumcount,
        this.props.largecount,
        this.props.boxlength,
      );
      this.props.dispatch(boxesCount(boxPacker.packAllPackages()));
    } else {
      const defaultLength = Number(30);
      this.props.dispatch(boxLengthChange(defaultLength));
      const boxPacker = new Packer(
        this.props.smallcount,
        this.props.mediumcount,
        this.props.largecount,
        defaultLength,
      );
      this.props.dispatch(boxesCount(boxPacker.packAllPackages()));
    }
  }

  render() {
    return (
      <div className="card">
        <div className="calculatorWrapper">
          <div className="calculatorButton"><RaisedButton label="Calculate" onClick={this.handleClick} primary /></div>
          <div className="calculatorH2">
            <h1>{this.props.boxescount}</h1>
          </div>
          <div className="calculatorH1">
            <h1>
              {
              (() => {
                if (this.props.boxescount === 1) {
                  return '... box needed';
                }
                return '... boxes needed';
              })()
            }
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  boxlength: PropTypes.number.isRequired,
  smallcount: PropTypes.number.isRequired,
  mediumcount: PropTypes.number.isRequired,
  largecount: PropTypes.number.isRequired,
  boxescount: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
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
export default connect(mapStateToProps)(Calculator);
