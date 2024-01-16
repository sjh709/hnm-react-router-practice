// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { thunk } from 'redux-thunk';
// import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import authenticateReducer from './reducers/authenticateReducer';

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// combinereducer
// thunk
// applyMiddleware
// composeWithDevTools

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
