import { Animal } from '@/app/home/_types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnimalsState {
  animals: Animal[];
}

const initialState: AnimalsState = {
  animals: [],
};

const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    fetchAnimalsSuccess(state, action: PayloadAction<Animal[]>) {
      state.animals = action.payload;
    },
  },
});

export const { fetchAnimalsSuccess } = animalsSlice.actions;

export default animalsSlice.reducer;
