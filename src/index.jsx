import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { register } from './serviceWorker';
import './index.css';
import App from './components/App';
/**
 * [Root Component.
 * Sets the App Component inside a Material UI Provider.
 * As a result, MUI components and style can be rendered.]
 */
const Root = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

// eslint-disable-next-line no-undef
ReactDOM.render(<Root />, document.getElementById('root'));
register();
