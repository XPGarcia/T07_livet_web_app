import { configureStore } from '@reduxjs/toolkit'
import { sessionReducer } from 'redux-react-session';
import calendarSlice from './calendar';

const store = configureStore({
  reducer: {
    sessionReducer: sessionReducer,
    calendar: calendarSlice
  }
});

export default store;