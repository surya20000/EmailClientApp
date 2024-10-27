import { createSlice } from "@reduxjs/toolkit";

export const FavoriteEmailSlice = createSlice({
  name: "favoriteEmails",
  initialState: {
    favoriteEmails: [],
  },
  reducers: {
    addFavoriteEmail: (state, action) => {
      const newEmail = action.payload;
      const exists = state.favoriteEmails.some(
        (email) => email.id === newEmail.id
      );

      if (!exists) {
        state.favoriteEmails.push(newEmail);
      }
    },
  },
});

export const getAllFavoriteEmails = (state) =>
  state.favoriteEmails.favoriteEmails;
export const { addFavoriteEmail } = FavoriteEmailSlice.actions;
export default FavoriteEmailSlice.reducer;
