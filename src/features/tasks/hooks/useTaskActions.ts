import { useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../tasksSlice';
import { Task } from '../types';

export function useTaskActions() {
  const dispatch = useDispatch();

  const createTask = (taskData: Omit<Task, 'id' | 'completedAt'>) => {
    const task: Task = {
      id: crypto.randomUUID(),
      completedAt: new Date().toISOString(),
      ...taskData,
    };
    dispatch(addTask(task));
  };

  const removeTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  return { createTask, removeTask };
}