/* eslint-disable import/extensions */
import React from 'react';
import { Provider } from 'react-redux';
import logo from '../assets/box.svg';
import './css/App.css';
import Bag from './Bag.jsx';
import Box from './Box.jsx';
import ShowData from './ShowData.jsx';
import Calculator from './Calculator.jsx';
import store from '../store';
import data from '../data/data.json';


/**
 * [App combines all components of the entire app.
 * Provider passes the store down to all components inside of it.
 * The Bag components and Box component receive additional props, provided with * the data json.]
 * @extends Component
 */
const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Packer.</h1>
      </header>
      <main>
        <Bag
          index={Object.keys(data)[0]}
          name={data.small.grams}
          height={data.small.height}
          width={data.small.width}
          length={data.small.length}
        />
        <Bag
          index={Object.keys(data)[1]}
          name={data.medium.grams}
          height={data.medium.height}
          width={data.medium.width}
          length={data.medium.length}
        />
        <Bag
          index={Object.keys(data)[2]}
          name={data.large.grams}
          height={data.large.height}
          width={data.large.width}
          length={data.large.length}
        />
        <Box index="box" />
        <ShowData />
        <Calculator />
      </main>
    </div>
  </Provider>
);

export default App;
