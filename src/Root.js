import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

export default (props) => (
  <Provider store={createStore(reducers, {})}>
    {props.children}
  </Provider>
);