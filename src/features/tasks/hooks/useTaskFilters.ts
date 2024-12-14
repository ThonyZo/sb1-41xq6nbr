import { useMemo } from 'react';
import { Task, ViewMode } from '../types';
import { isDateToday, isDateThisWeek, isDateThisMonth } from '../utils/dateUtils';

export function useTaskFilters(tasks: Task[], viewMode: ViewMode, searchTerm: string) {
  return useMemo(() => {
    return tasks.filter(task => {
      const matchesSearch = 
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (!matchesSearch) return false;

      switch (viewMode) {
        case 'day':
          return isDateToday(task.completedAt);
        case 'week':
          return isDateThisWeek(task.completedAt);
        case 'month':
          return isDateThisMonth(task.completedAt);
        default:
          return true;
      }
    });
  }, [tasks, viewMode, searchTerm]);
}