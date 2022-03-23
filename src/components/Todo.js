import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';


function Todo({text}) {

  const [showModal, setShowModal] = useState(false);

  function handleDelete() {
    setShowModal(true);
  };

  function closeModal() {
    setShowModal(false);
  };

  return (
    <div>
      <h2>{text}</h2>
      <div>
        <button onClick={() => handleDelete()} >Delete</button>
      </div>
      {showModal && <Backdrop onCancel={closeModal}/>}
      {showModal && <Modal />}
    </div>
  );
}

export default Todo;
