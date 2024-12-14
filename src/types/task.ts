export interface Task {
  id: string;
  title: string;
  description: string;
  completedAt: string;
  timeSpent: {
    hours: number;
    minutes: number;
  };
}

export type ViewMode = 'day' | 'week' | 'month';