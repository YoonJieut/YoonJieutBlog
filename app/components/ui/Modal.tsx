"use client";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  image: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  image,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="w-1/2 h-2/3 bg-white border border-gray-300 rounded-lg overflow-hidden">
            <div className="flex flex-col items-center justify-center p-4">
              <img src={image} alt="Modal Image" className="w-1/2" />
              <h2 className="text-xl font-bold mt-4">{title}</h2>
              <p className="mt-2">{content}</p>
            </div>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={onClose}
              title="Close Modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
