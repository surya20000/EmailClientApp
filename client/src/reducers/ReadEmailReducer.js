import { createSlice } from "@reduxjs/toolkit";

export const ReadEmailSlice = createSlice({
  name: "readEmails",
  initialState: {
    readEmails: [],
  },
  reducers: {
    addEmail: (state, action) => {
      const newReadEmail = action.payload;
      const exists = state.readEmails.some(
        (email) => email.id === newReadEmail.id
      );
      if (!exists) {
        state.readEmails.push(action.payload);
      }
    },
  },
});

export const { addEmail } = ReadEmailSlice.actions;
export const getAllReadEmails = (state) => state.readEmails.readEmails;
export default ReadEmailSlice.reducer;
