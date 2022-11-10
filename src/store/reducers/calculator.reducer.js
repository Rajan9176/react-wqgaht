import { createSlice } from '@reduxjs/toolkit';
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    calcTxt: '123',
  },
  reducers: {
    clear: (state) => {
      let splitedString = state.calcTxt.split('');
      console.log(splitedString);
      if (splitedString.length >= 1) {
        splitedString.pop();
      }
      state.calcTxt = splitedString.join('');
    },
    allClear: (state) => {
      state.calcTxt = '';
    },
    addText: (state, action) => {
      state.calcTxt += action.payload;
    },
    solve: (state, action) => {
      state.calcTxt = eval(state.calcTxt);
    },
  },
});
export const { clear, allClear, addText, solve } = calculatorSlice.actions;
export default calculatorSlice.reducer;
