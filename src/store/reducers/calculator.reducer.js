import { createSlice } from '@reduxjs/toolkit';
export const calculatorSlice = createSlice({
  name: 'calculator',
  inisialState: {
    value: 2,
    Reducer: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (stste) => {
        stste.value -= 1;
      },
    },
  },
});
export default calculatorSlice.reducer;
