import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice/themeSlice';
import languageReducer from './slice/languageSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
