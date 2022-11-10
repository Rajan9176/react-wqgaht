import counterReducer from './reducers/counter.reducer';
import calculatorReducer from './reducers/calculator.reducer';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calculatorReducer,
  },
});
