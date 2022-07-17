import React from 'react';

import { HabitsList } from '../../Habits/Habits';
import { useStoreWithInitializer } from '../../../store/storeHooks';
import { store } from '../../../store/store';
import { loadHabits } from './Main.slice';

export const Main = () => {
  const { habits } = useStoreWithInitializer(({ main }) => main, load);

  if (!habits) return <>no habits</>;
  return <HabitsList habits={habits} />;
};

async function load() {
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

  store.dispatch(loadHabits(habits));
}
