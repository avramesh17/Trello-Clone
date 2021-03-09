import React, {useState} from 'react';
import Card from '../Card/Card';
// import { Container, Draggable } from 'react-smooth-dnd';
// import Card from '../Card/Card';

import './TaskList.css';

const TaskList = ({ title, tasks, openCreateModal }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="task-list">
            <div className="task-header">
                <h5>{title}</h5>
                <span onClick={openDropdown}>...</span>
                <ul className={`task-list-options ${!isOpen ? 'hidden' : '' }`}>
                    <li onClick={() => openCreateModal(true)}>Create</li>
                    <li>Edit</li>
                    <li>Delete</li>
                </ul>
            </div>
            {tasks.map(task => <Card key={task.id} task={task} />)}
        </div>
    )
}

export default TaskList;