import React from 'react';
import { Container, Draggable } from 'react-smooth-dnd';

import './Card.css';

const Card = ({ task }) => {
    return (
        <Container>
            <Draggable>
            <div className="card">
                <p className='card-title'>{task.title}</p>
                <p className='card-description'>{task.description}</p>
            </div>
            </Draggable>
        </Container>
    )
}

export default Card;