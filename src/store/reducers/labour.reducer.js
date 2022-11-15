import { createSlice } from '@reduxjs/toolkit';

const labourSlice = createSlice({
  name: 'labour',
  initialState: {
    value: {
      Name: 'Aurora',
      Age: 53,
      Email: 'ante.blandit@disparturient.ca',
      'Date of joining': '10/06/2019',
      'Phone number': '1628101902299',
      Street: '493 Iaculis Rd.',
      City: 'Lewiston',
      Zip: '42591-180',
      Region: 'Maine',
      Country: 'Sudan',
      Info: 'est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia',
      EmployeeID: 101,
    },
  },
  reducers: {
    changeLabour: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeLabour } = labourSlice.actions;
export default labourSlice.reducer;
