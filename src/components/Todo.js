import { useState } from 'react';


function Todo({text}) {

  const [showModal, setShowModal] = useState(false);

  function handleDelete() {
    setShowModal(true);
  }
  return (
    <div>
      <h2>{text}</h2>
      <div>
        <button onClick={() => handleDelete()} >Delete</button>
      </div>
    </div>
  );
}

export default Todo;
