import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface TaskFormFieldsProps {
  title: string;
  description: string;
  hours: number;
  minutes: number;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onHoursChange: (value: number) => void;
  onMinutesChange: (value: number) => void;
}

export function TaskFormFields({
  title,
  description,
  hours,
  minutes,
  onTitleChange,
  onDescriptionChange,
  onHoursChange,
  onMinutesChange,
}: TaskFormFieldsProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="hours">Hours</Label>
          <Input
            id="hours"
            type="number"
            min="0"
            value={hours}
            onChange={(e) => onHoursChange(Number(e.target.value))}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="minutes">Minutes</Label>
          <Input
            id="minutes"
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={(e) => onMinutesChange(Number(e.target.value))}
            required
          />
        </div>
      </div>
    </>
  );
}