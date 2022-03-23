function Modal({onConfirm, onCancel}) {

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={onCancel}>cancel</button>
      <button className="btn" onClick={onConfirm}>confirm</button>
    </div>
  );
}

export default Modal;
