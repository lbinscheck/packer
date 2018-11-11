/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import TextField from 'material-ui/TextField';
import { orange500, cyan500 } from 'material-ui/styles/colors';
import './css/counter.css';

import {
  smallIncrement,
  mediumIncrement,
  largeIncrement,
  boxIncrement,
  smallDecrement,
  mediumDecrement,
  largeDecrement,
  boxDecrement,
  smallCountChange,
  mediumCountChange,
  largeCountChange,
  boxLengthChange,
} from '../actions';

/**
 * [Container Component,
 * Handles the incrementation and decrementation of the counts. Based on button
 * clicks and textfield input.
 * This component will be displayed as cards for small, medium, large and
 *  box.]
 * @extends Component
 */
class Counter extends Component {
  /**
   * [setting additional state to display warnings to the user]
   * @param {[Object]} props
   */
  constructor(props) {
    super(props);
    this.state = {
      color: cyan500,
      borderColor: cyan500,
      floatingLabelText: props.title,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.validateInputForBags = this.validateInputForBags.bind(this);
    this.validateInputForBox = this.validateInputForBox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.currentCount = this.currentCount.bind(this);
  }

  /**
 * [Dispatches the increment action based on the received index from the Bag
 * Box components.]
 * @return {[]} [default return nothing, simply no action]
 */
  increment() {
    switch (this.props.index) {
      case 'small':
        return this.props.dispatch(smallIncrement());

      case 'medium':
        return this.props.dispatch(mediumIncrement());

      case 'large':
        return this.props.dispatch(largeIncrement());

      case 'box':
        return this.props.dispatch(boxIncrement());

      default:
        return 0;
    }
  }

  /**
   * [Dispatches the decrement action based on the received index from the Bag
   * Box components.]
   * @return {[]} [default return nothing, simply no action]
   */
  decrement() {
    switch (this.props.index) {
      case 'small':
        return this.props.dispatch(smallDecrement());

      case 'medium':
        return this.props.dispatch(mediumDecrement());

      case 'large':
        return this.props.dispatch(largeDecrement());

      case 'box':
        return this.props.dispatch(boxDecrement());

      default:
        return 0;
    }
  }

  /**
 * [validates the input for Bags and sets the state]
 * @param  {[Object]} e [event]
 */
  validateInputForBags(e) {
    if (e.target.value > 9999) {
      this.setState({ color: orange500, borderColor: orange500, floatingLabelText: 'Big numbers = heavy calculations' });
    } else {
      this.setState({ color: cyan500, borderColor: cyan500, floatingLabelText: this.props.title });
    }
  }

  /**
   * [validates the input for Box and sets the state]
   * @param  {[Object]} e [event]
   */
  validateInputForBox(e) {
    if (e.target.value < 30) {
      this.setState({ color: orange500, borderColor: orange500, floatingLabelText: 'Calculates with 30cm as minimum.' });
    } else {
      this.setState({ color: cyan500, borderColor: cyan500 });
    }
  }

  /**
 * [Dispatches the change actions depending on the provided index props.
 * Functions to display warning are executed.]
 * @param  {[Object]} e [description]
 * @return {[Number]}   [Fallback return is 0]
 */
  handleChange(e) {
    this.validateInputForBags(e);
    switch (this.props.index) {
      case 'small':
        return this.props.dispatch(smallCountChange(e.target.value));

      case 'medium':
        return this.props.dispatch(mediumCountChange(e.target.value));

      case 'large':
        return this.props.dispatch(largeCountChange(e.target.value));

      case 'box':
        this.validateInputForBox(e);
        return this.props.dispatch(boxLengthChange(e.target.value));

      default:
        return 0;
    }
  }

  /**
   * [Returns the counter based on the current props.]
   * @return {[Number]}
   */
  currentCount() {
    switch (this.props.index) {
      case 'small':
        return this.props.smallcount;
      case 'medium':
        return this.props.mediumcount;
      case 'large':
        return this.props.largecount;
      case 'box':
        return this.props.boxlength;
      default:
        return 0;
    }
  }

  render() {
    return (
      <div className="counter">
        <div className="countWrapper">
          <FloatingActionButton mini onClick={this.decrement}>
            <ContentRemove />
          </FloatingActionButton>
          <h1>
            {this.currentCount()}
            {this.props.cm}
          </h1>
          <FloatingActionButton mini onClick={this.increment}>

            <ContentAdd />
          </FloatingActionButton>
        </div>
        <TextField
          floatingLabelText={this.state.floatingLabelText}
          floatingLabelFixed
          type="text"
          onChange={this.handleChange}
          value={this.currentCount()}
          inputStyle={{
            textAlign: 'center',
          }}
          underlineFocusStyle={this.state}
          floatingLabelStyle={this.state}
          floatingLabelFocusStyle={this.state}
        />
      </div>
    );
  }
}

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  smallcount: PropTypes.number.isRequired,
  mediumcount: PropTypes.number.isRequired,
  largecount: PropTypes.number.isRequired,
  cm: PropTypes.string.isRequired,
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
export default connect(mapStateToProps)(Counter);
