import React from 'react';

import { WeekRow } from '../Calendar/Calendar';

import { Habit } from '../../types/habits';

export const HabitsList = ({ habits }: { habits: Habit[] }) => {
  return (
    <>
      {habits.map((habit) => (
        <HabitRow habit={habit} key={habit.id} />
      ))}
    </>
  );
};

export const HabitRow = ({ habit }: { habit: Habit }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EAEDED',
        margin: '5px',
        padding: '5px',
        borderRadius: '5px',
      }}
    >
      <p style={{ margin: 0 }}>{habit.title}</p>
      <WeekRow listDays={habit.progressList} withParams={habit.withParams} />
    </div>
  );
};
