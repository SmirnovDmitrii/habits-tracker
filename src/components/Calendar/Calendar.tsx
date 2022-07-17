import React from 'react';

import { ProgressList } from '../../types/habits';

export const WeekRow = ({ listDays, withParams }: { listDays: ProgressList[]; withParams: boolean }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const row = new Array(7).fill(null, 0, 7).map((item, index) => {
    const day = listDays.find((item) => item.date.getTime() === today.getTime() - 86400000 * index);
    return (
      <DayContainer>
        {withParams ? <DayNumeric value={day?.value} caption={day?.caption} /> : <Day value={Boolean(day)} />}
      </DayContainer>
    );
  });

  return <div style={{ display: 'flex' }}>{row.map((item) => item)}</div>;
};

export const DayContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
    }}
  >
    {children}
  </div>
);

export const Day = ({ value }: { value?: boolean }) => <div>{value ? 'V' : 'X'}</div>;

export const DayNumeric = ({ value, caption }: { value?: number; caption?: string }) => {
  if (!value) return <div>0</div>;

  return (
    <>
      <div>{value}</div>
      <div>{caption}</div>
    </>
  );
};
