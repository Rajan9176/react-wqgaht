import counterReducer from './reducers/counter.reducer';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
