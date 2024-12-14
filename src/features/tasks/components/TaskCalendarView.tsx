import { useMemo } from 'react';
import { startOfWeek, eachDayOfInterval, addDays } from 'date-fns';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Task } from '../types';
import { formatShortDay, formatDayNumber, formatDateKey, isDateToday } from '../utils/dateUtils';

interface TaskCalendarViewProps {
  tasks: Task[];
  onDayClick: (date: Date) => void;
}

export function TaskCalendarView({ tasks, onDayClick }: TaskCalendarViewProps) {
  const weekDays = useMemo(() => {
    const start = startOfWeek(new Date());
    return eachDayOfInterval({
      start,
      end: addDays(start, 6),
    });
  }, []);

  const tasksByDay = useMemo(() => {
    return weekDays.map(day => ({
      date: day,
      tasks: tasks.filter(task => 
        formatDateKey(new Date(task.completedAt)) === formatDateKey(day)
      ),
    }));
  }, [tasks, weekDays]);

  return (
    <div className="grid grid-cols-7 gap-2">
      {tasksByDay.map(({ date, tasks }) => (
        <Card
          key={date.toISOString()}
          className={cn(
            "p-2 cursor-pointer hover:bg-accent",
            isDateToday(date) && "border-primary"
          )}
          onClick={() => onDayClick(date)}
        >
          <div className="text-center">
            <div className="text-sm font-medium">{formatShortDay(date)}</div>
            <div className="text-2xl">{formatDayNumber(date)}</div>
            {tasks.length > 0 && (
              <div className="mt-1 text-xs text-muted-foreground">
                {tasks.length} tasks
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}