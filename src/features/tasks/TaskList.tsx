import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { ViewMode } from './types';
import { TaskCard } from './TaskCard';
import { TaskStats } from './components/TaskStats';
import { TaskCalendarView } from './components/TaskCalendarView';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTaskFilters } from './hooks/useTaskFilters';
import { useState } from 'react';

interface TaskListProps {
  viewMode: ViewMode;
  searchTerm: string;
}

export function TaskList({ viewMode, searchTerm }: TaskListProps) {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filteredTasks = useTaskFilters(tasks, viewMode, searchTerm);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="space-y-6">
      <TaskStats tasks={filteredTasks} />
      
      {viewMode !== 'day' && (
        <TaskCalendarView
          tasks={tasks}
          onDayClick={setSelectedDate}
        />
      )}
      
      <ScrollArea className="h-[400px] rounded-md border p-4">
        <div className="space-y-4">
          {filteredTasks.length === 0 ? (
            <p className="text-center text-muted-foreground">No tasks found</p>
          ) : (
            filteredTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                viewMode={viewMode}
              />
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}