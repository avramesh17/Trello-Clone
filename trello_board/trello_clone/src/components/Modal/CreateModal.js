import React, { useState }  from 'react';

import './Modal.css';

const CreateModal = ({ open, closeModal, createTask }) => {
    const [title, setTitle] = useState('');
    const [description  , setDescription]= useState('');

    const create = () => {
         createTask(title, description)
         setTitle('');
         setDescription('')
         closeModal()
    }

  return (
    <div className={`create-modal ${!open ? "hidden" : ""}`}>
      <div>
        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <input type="text" name="description" onChange={(e) => setDescription(e.target.value)}/>
      </div>

      <div className="btn-wrapper">
        <button onClick={closeModal}>Cancel</button>
        <button onClick={create}>Create</button>
      </div>
    </div>
  );
};

export default CreateModal;
