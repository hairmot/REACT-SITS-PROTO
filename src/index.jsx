import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import {createStore, applyMiddleware} from 'redux';
import reducer from './Reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//Polyfills - fetch and promise
import 'whatwg-fetch';
import Promise from 'promise-polyfill';

// Add promise polyfill to window
if (!window.Promise) {
  window.Promise = Promise;
}


let store = createStore(reducer, applyMiddleware(thunk));

render(
	<Provider store={store}>
		<App />
	</Provider>, document.querySelector("#app")
);


