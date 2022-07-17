import React from 'react';
import { HabitsList } from '../../Habits/Habits';

export const Main = () => {
  const habits = [
    {
      id: '1',
      title: 'привычка с параметрами',
      description: 'Пробегаю N километров',
      withParams: true,
      progressList: [
        {
          date: new Date(2022, 6, 18),
          value: 12,
          caption: 'km',
        },
        {
          date: new Date(2022, 6, 16),
          value: 12,
          caption: 'km',
        },
      ],
    },
    {
      id: '2',
      title: 'привычка без параметров',
      description: 'да/нет',
      withParams: false,
      progressList: [
        {
          date: new Date(2022, 6, 18),
        },
        {
          date: new Date(2022, 6, 14),
        },
      ],
    },
  ];

  return <HabitsList habits={habits} />;
};
