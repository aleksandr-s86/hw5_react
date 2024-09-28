import { createSlice, configureStore } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkTheme: false, // false для светлой темы, true для темной
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
const themeReducer = themeSlice.reducer;

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
