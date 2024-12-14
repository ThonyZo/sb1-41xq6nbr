import { useMemo } from 'react';
import { Task } from '../types';
import { calculateTotalTime, calculateAverageTime } from '../utils/taskUtils';

export function useTaskStats(tasks: Task[]) {
  return useMemo(() => {
    const totalTime = calculateTotalTime(tasks);
    const averageTime = calculateAverageTime(tasks);

    return {
      totalTime,
      averageTime,
      taskCount: tasks.length,
    };
  }, [tasks]);
}