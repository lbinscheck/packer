import { createStore } from 'redux';
import reducer from '../reducers/index';

/**
 * [Creates a redux store based on the received reducers.]
 * @type {[Function]}
 */
const store = createStore(reducer);
export default store;
