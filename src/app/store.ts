import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import descriptionReducer from './../features/home/homeSlice';

export const store = configureStore({
  reducer: {
    description: descriptionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
