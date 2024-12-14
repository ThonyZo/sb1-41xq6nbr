import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { format, isToday, isThisWeek, isThisMonth } from 'date-fns';
import { RootState } from '@/store/store';
import { ViewMode } from '@/types/task';
import { TaskCard } from './TaskCard';
import { ScrollArea } from '@/components/ui/scroll-area';

interface TaskListProps {
  viewMode: ViewMode;
  searchTerm: string;
}

export function TaskList({ viewMode, searchTerm }: TaskListProps) {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          task.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const date = new Date(task.completedAt);
      
      switch (viewMode) {
        case 'day':
          return isToday(date) && matchesSearch;
        case 'week':
          return isThisWeek(date) && matchesSearch;
        case 'month':
          return isThisMonth(date) && matchesSearch;
        default:
          return matchesSearch;
      }
    });
  }, [tasks, viewMode, searchTerm]);

  const totalTime = useMemo(() => {
    return filteredTasks.reduce((acc, task) => {
      return {
        hours: acc.hours + task.timeSpent.hours,
        minutes: acc.minutes + task.timeSpent.minutes
      };
    }, { hours: 0, minutes: 0 });
  }, [filteredTasks]);

  return (
    <div className="space-y-4">
      <div className="p-4 bg-secondary rounded-lg">
        <p className="text-sm font-medium">
          Total Time: {totalTime.hours}h {totalTime.minutes}m
        </p>
        <p className="text-sm text-muted-foreground">
          Tasks completed: {filteredTasks.length}
        </p>
      </div>
      
      <ScrollArea className="h-[600px] rounded-md border p-4">
        <div className="space-y-4">
          {filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              viewMode={viewMode}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}