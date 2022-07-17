export interface ProgressList {
  date: Date;
  value?: number;
  caption?: string;
}

export interface Habit {
  id: string;
  title: string;
  description: string;
  withParams: boolean;
  progressList: ProgressList[];
}
