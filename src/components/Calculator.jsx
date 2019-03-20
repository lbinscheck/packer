import React from 'react';
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
function Calculator(props) {
  const {
    dispatch,
    smallcount,
    mediumcount,
    largecount,
    boxlength,
    boxescount,
  } = props;

  /**
   * [handleClick dispatches the boxesCount action, which receives the
   * calculated box number. The number is returned by the function
   * getNumberOfNeededBoxes, which is a method of the class BoxPacker.
   * Before the dispatch is executed, the boxlength will be set to 30 if it was
   * received smaller.]
   */
  const handleClick = () => {
    // eslint-disable-next-line react/destructuring-assignment
    if (boxlength >= 30) {
      const boxPacker = new Packer(
        smallcount,
        mediumcount,
        largecount,
        boxlength,
      );
      dispatch(boxesCount(boxPacker.packAllPackages()));
    } else {
      const defaultLength = Number(30);
      dispatch(boxLengthChange(defaultLength));
      const boxPacker = new Packer(
        smallcount,
        mediumcount,
        largecount,
        defaultLength,
      );
      dispatch(boxesCount(boxPacker.packAllPackages()));
    }
  };

  return (
    <div className="card">
      <div className="calculatorWrapper">
        <div className="calculatorButton"><RaisedButton label="Calculate" onClick={handleClick} primary /></div>
        <div className="calculatorH2">
          <h1>{boxescount}</h1>
        </div>
        <div className="calculatorH1">
          <h1>
            {
              (() => {
                if (boxescount === 1) {
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
