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

export interface TaskFormData {
  title: string;
  description: string;
  timeSpent: {
    hours: number;
    minutes: number;
  };
}