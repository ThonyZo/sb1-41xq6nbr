import { Card } from '@/components/ui/card';
import { Clock, ListChecks, Timer } from 'lucide-react';
import { useTaskStats } from '../hooks/useTaskStats';
import { Task } from '../types';

interface TaskStatsProps {
  tasks: Task[];
}

export function TaskStats({ tasks }: TaskStatsProps) {
  const stats = useTaskStats(tasks);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="p-4">
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <h3 className="text-sm font-medium">Total Time</h3>
        </div>
        <p className="mt-2 text-2xl font-bold">
          {stats.totalTime.hours}h {stats.totalTime.minutes}m
        </p>
      </Card>

      <Card className="p-4">
        <div className="flex items-center space-x-2">
          <ListChecks className="h-4 w-4 text-muted-foreground" />
          <h3 className="text-sm font-medium">Tasks Completed</h3>
        </div>
        <p className="mt-2 text-2xl font-bold">{stats.taskCount}</p>
      </Card>

      <Card className="p-4">
        <div className="flex items-center space-x-2">
          <Timer className="h-4 w-4 text-muted-foreground" />
          <h3 className="text-sm font-medium">Average Time</h3>
        </div>
        <p className="mt-2 text-2xl font-bold">
          {stats.averageTime.hours}h {stats.averageTime.minutes}m
        </p>
      </Card>
    </div>
  );
}