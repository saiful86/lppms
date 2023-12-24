import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IReceive {
  rows: any;
  isDebateAble: boolean;
}

const initialState: IReceive = {
  rows: [],
  isDebateAble: false,
};
const receiveSlice = createSlice({
  name: "receive",
  initialState,
  reducers: {
    addNewRow: (state, action: PayloadAction<any>) => {
      const isExist = state.rows.find(
        (row: any) => row.itemInfoId == action.payload.itemInfoId
      );
      if (isExist) {
        // if exist then calculation will add here
      } else {
        state.rows.push(action.payload);
      }
    },
    changeDebateAble: (state, action: PayloadAction<any>) => {
      if (action.payload == 8) {
        state.isDebateAble = true;
      } else {
        state.isDebateAble = false;
      }
    },
  },
});

export const { addNewRow, changeDebateAble } = receiveSlice.actions;

export default receiveSlice.reducer;
