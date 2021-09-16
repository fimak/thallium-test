import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import galleryReducer from '../state/gallery/gallery.slice'

export const createStore = configureStore({
  reducer: {
    gallery: galleryReducer
  },
});

export type AppDispatch = typeof createStore.dispatch;
export type RootState = ReturnType<typeof createStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
