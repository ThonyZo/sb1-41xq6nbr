import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { TaskFormFields } from './components/TaskFormFields';
import { useTaskActions } from './hooks/useTaskActions';

export function TaskForm() {
  const { createTask } = useTaskActions();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    createTask({
      title,
      description,
      timeSpent: { hours, minutes },
    });

    setTitle('');
    setDescription('');
    setHours(0);
    setMinutes(0);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <TaskFormFields
          title={title}
          description={description}
          hours={hours}
          minutes={minutes}
          onTitleChange={setTitle}
          onDescriptionChange={setDescription}
          onHoursChange={setHours}
          onMinutesChange={setMinutes}
        />
        
        <Button type="submit" className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </form>
    </Card>
  );
}