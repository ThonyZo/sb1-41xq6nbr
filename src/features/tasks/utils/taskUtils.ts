import { Task } from '../types';

export const calculateTotalTime = (tasks: Task[]) => {
  const totalMinutes = tasks.reduce((acc, task) => {
    return acc + task.timeSpent.minutes + (task.timeSpent.hours * 60);
  }, 0);

  return {
    hours: Math.floor(totalMinutes / 60),
    minutes: totalMinutes % 60,
  };
};

export const calculateAverageTime = (tasks: Task[]) => {
  if (tasks.length === 0) return { hours: 0, minutes: 0 };

  const totalMinutes = tasks.reduce((acc, task) => {
    return acc + task.timeSpent.minutes + (task.timeSpent.hours * 60);
  }, 0);

  const averageMinutes = Math.floor(totalMinutes / tasks.length);
  return {
    hours: Math.floor(averageMinutes / 60),
    minutes: averageMinutes % 60,
  };
};