import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Counter from './Counter';
import { incrementCounter } from './react components/actions';
import { decrementCounter } from './react components/actions';
import { setValue } from './react components/actions';
import { clearText } from './react components/actions';
import { clearInput } from './react components/actions';

class CounterApp extends React.Component {
  inputOnChange = (e) => {
    let textValue = e.target.value !== '' ? +e.target.value : '';
    this.props.setValue(textValue);
    console.log(textValue);
  };

  clearInput = (e) => {
    this.props.clearText(null);
  };

  incrementCounter = () => {
    let val = this.props.value;
    this.props.inc(val);
    this.props.value = 0;
  };

  decrementCounter = () => {
    let val = this.props.value;
    this.props.dec(val);
  };

  render() {
    return (
      <div className="main-div">
        <p
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
          }}>
          Calculator
        </p>
        <Counter
          count={this.props.count}
          inc={this.props.inc}
          dec={this.props.dec}
          inp={this.inputOnChange}
          clr={this.clearInput}></Counter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
  value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  inc: (val) => {
    dispatch(incrementCounter(val));
  },
  dec: (val) => {
    dispatch(decrementCounter(val));
  },
  setValue: (val) => {
    dispatch(setValue(val));
  },
  clearText: (val) => {
    dispatch(clearText(val));
  },
  clearInput: () => dispatch(clearInput()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
