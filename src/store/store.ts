import { Action, configureStore } from '@reduxjs/toolkit';

import main from '../components/Pages/Main/Main.slice';

const middlewareConfiguration = { serializableCheck: false };

export const store = configureStore({
  reducer: { main },
  devTools: {
    name: 'Habits',
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfiguration),
});

export type State = ReturnType<typeof store.getState>;

export function dispatchOnCall(action: Action) {
  return () => store.dispatch(action);
}
