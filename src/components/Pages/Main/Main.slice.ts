import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Habit } from '../../../types/habits';

export interface AppState {
  habits: Habit[] | null;
}

const initialState: AppState = {
  habits: null,
};

const slice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    loadHabits: (state, { payload: habits }: PayloadAction<Habit[]>) => {
      state.habits = habits;
    },
  },
});

export const { loadHabits } = slice.actions;

export default slice.reducer;
