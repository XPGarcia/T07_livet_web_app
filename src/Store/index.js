import { configureStore } from '@reduxjs/toolkit'
import { sessionReducer } from 'redux-react-session';

const store = configureStore({
  reducer: {
    sessionReducer: sessionReducer
  }
});

export default store;