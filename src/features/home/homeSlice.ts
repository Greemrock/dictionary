import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { fetchDefinition } from './homeAPI';

export interface HomeState {
  definitions: Definition[];
  isLoading: boolean;
  error: boolean;
}

const initialState: HomeState = {
  definitions: [],
  isLoading: false,
  error: false,
};

export const defenitionAsync = createAsyncThunk('fetchDefinition', async (word: string) => {
  const response = await fetchDefinition(word);
  return response.data;
});

export const defenitionSlice = createSlice({
  name: 'description',
  initialState,
  reducers: {
    setIsError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(defenitionAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(defenitionAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.definitions = action.payload;
    });
    builder.addCase(defenitionAsync.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const { setIsError } = defenitionSlice.actions;

export const selectDescription = (state: RootState) => state.description;

export default defenitionSlice.reducer;
