import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ViewMode } from './features/tasks/types';
import { TaskForm } from './features/tasks/TaskForm';
import { TaskList } from './features/tasks/TaskList';
import { TaskViewControls } from './features/tasks/components/TaskViewControls';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('day');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Task Tracker</h1>
            <p className="text-muted-foreground">
              Keep track of your completed tasks and time spent
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
            <div className="space-y-6">
              <TaskForm />
            </div>
            
            <div className="space-y-6">
              <TaskViewControls
                viewMode={viewMode}
                searchTerm={searchTerm}
                onViewModeChange={setViewMode}
                onSearchChange={setSearchTerm}
              />
              
              <TaskList viewMode={viewMode} searchTerm={searchTerm} />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;