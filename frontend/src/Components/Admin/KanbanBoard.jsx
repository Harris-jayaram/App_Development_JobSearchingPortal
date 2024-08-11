import React, { useState } from 'react';
import '../../Assest/css/KanbanBoard.css';

const initialTasks = {
  backlog: [
    { id: 'task-1', title: 'Task One', description: 'Description for task one', tags: ['tagOne', 'tagTwo', 'tagThree'], time: '36 mins' },
  ],
  pending: [
    { id: 'task-2', title: 'Admin Panel Back-end', description: 'Work on the back-end of the admin panel.', tags: ['Test', 'Front'], time: '50 mins' },
  ],
  todo: [
    { id: 'task-3', title: 'Admin Panel Front-end', description: 'Design the front-end for the admin panel.', tags: ['Test', 'Front'], time: '50 mins' },
  ],
  doing: [
    { id: 'task-4', title: 'API Integration', description: 'Integrate APIs with front-end.', tags: ['API', 'Integration'], time: '40 mins' },
  ],
  done: [
    { id: 'task-5', title: 'UI Design', description: 'Completed UI design for the dashboard.', tags: ['UI', 'Design'], time: '45 mins' },
  ],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('backlog');

  const handleAddTask = () => {
    if (!taskTitle.trim() || !taskDescription.trim()) {
      alert('Please enter a title and description for the task.');
      return;
    }

    const newTask = {
      id: `task-${new Date().getTime()}`,
      title: taskTitle,
      description: taskDescription,
      tags: ['New', 'Task'],
      time: '10 mins',
    };

    setTasks({
      ...tasks,
      [selectedColumn]: [...tasks[selectedColumn], newTask],
    });

    setTaskTitle('');
    setTaskDescription('');
  };

  const handleDeleteTask = (columnId, taskId) => {
    const updatedTasks = {
      ...tasks,
      [columnId]: tasks[columnId].filter(task => task.id !== taskId),
    };

    setTasks(updatedTasks);
  };

  return (
    <div className="kanban-board">
      <div className="add-task-section">
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="add-task-input"
        />
        <textarea
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="add-task-input"
        />
        <select
          value={selectedColumn}
          onChange={(e) => setSelectedColumn(e.target.value)}
          className="add-task-input"
        >
          {Object.keys(tasks).map((columnId) => (
            <option key={columnId} value={columnId}>
              {columnId.charAt(0).toUpperCase() + columnId.slice(1)}
            </option>
          ))}
        </select>
        <button onClick={handleAddTask} className="add-task-button">
          Add Task
        </button>
      </div>
      <div className="kanban-columns">
        {Object.keys(tasks).map((columnId) => (
          <div className="kanban-column" key={columnId}>
            <h2 className="column-title">{columnId.charAt(0).toUpperCase() + columnId.slice(1)}</h2>
            {tasks[columnId].map((task) => (
              <div className="kanban-task" key={task.id}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="task thumbnail"
                  className="task-image"
                />
                <div className="task-content">
                  <div className="task-tags">
                    {task.tags.map((tag, i) => (
                      <span key={i} className="task-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="task-title">{task.title}</h3>
                  <p className="task-desc">{task.description}</p>
                  <div className="task-time">
                    <span role="img" aria-label="time">⏰</span> {task.time}
                  </div>
                  <button
                    onClick={() => handleDeleteTask(columnId, task.id)}
                    className="delete-task-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
