import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfIcecreams: number;
};
const initialState: InitialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, actions: PayloadAction<number>) => {
      state.numOfIcecreams += actions.payload;
    },
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
