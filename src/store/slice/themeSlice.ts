import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
      if (action.payload === 'light') {
        document.body.setAttribute('data-theme', 'light');
      } else {
        document.body.setAttribute('data-theme', 'dark');
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
