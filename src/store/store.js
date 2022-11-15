import counterReducer from './reducers/counter.reducer';
import calculatorReducer from './reducers/calculator.reducer';
import { configureStore } from '@reduxjs/toolkit';
import labourReducer from './reducers/labour.reducer';


export default configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calculatorReducer,
    labour:labourReducer
  },
});
