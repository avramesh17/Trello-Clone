import React, { useState } from 'react';
import TaskList from './components/TaskList';
import CreateModal from './components/Modal/CreateModal'

const MOCKED_TASKS = [];

function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [tasks, setTasks] = useState(MOCKED_TASKS);

  const createTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        id: Math.random(100),
        title,
        description
      }
    ])
  }

  return (
    <div className="App">
      <TaskList title="Todo" tasks={tasks} openCreateModal={setIsCreateModalOpen}/>
      <CreateModal
        open={isCreateModalOpen}
        closeModal={() => setIsCreateModalOpen(false)}
        createTask={createTask}
      />
    </div>
  );
}

export default App;
