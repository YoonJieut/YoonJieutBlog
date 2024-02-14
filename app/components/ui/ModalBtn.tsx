const ModalBtn = ({ children, ...props }) => {
  return (
    <button className="modal-btn" {...props}>
      {children}
    </button>
  );
};

export default ModalBtn;
