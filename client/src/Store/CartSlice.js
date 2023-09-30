const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
     return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { add, remove } = cartslice.actions;
export default cartslice.reducer;