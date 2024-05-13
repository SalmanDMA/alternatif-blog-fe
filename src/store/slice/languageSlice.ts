import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  language: 'en' | 'id';
}

const initialState: LanguageState = {
  language: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'id'>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
