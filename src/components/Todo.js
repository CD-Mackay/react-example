function Todo({text}) {

  function handleDelete() {
    
  }
  return (
    <div>
      <h2>{text}</h2>
      <button onClick={() => handleDelete()} >Delete</button>
    </div>
  );
}

export default Todo;
