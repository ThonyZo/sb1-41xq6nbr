import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { Task, ViewMode } from '@/types/task';
import { deleteTask } from '@/store/tasksSlice';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Clock, Trash2 } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  viewMode: ViewMode;
}

export function TaskCard({ task, viewMode }: TaskCardProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const TaskContent = () => (
    <div className="space-y-2">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{task.title}</h3>
          <p className="text-sm text-muted-foreground">
            {format(new Date(task.completedAt), 'PPp')}
          </p>
        </div>
        <Button variant="destructive" size="icon" onClick={handleDelete}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
      {viewMode === 'day' && (
        <p className="text-sm">{task.description}</p>
      )}
      
      <div className="flex items-center text-sm text-muted-foreground">
        <Clock className="mr-2 h-4 w-4" />
        {task.timeSpent.hours}h {task.timeSpent.minutes}m
      </div>
    </div>
  );

  if (viewMode === 'day') {
    return (
      <Card className="p-4">
        <TaskContent />
      </Card>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="p-4 cursor-pointer hover:bg-accent">
          <TaskContent />
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{task.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{task.description}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            {task.timeSpent.hours}h {task.timeSpent.minutes}m
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}