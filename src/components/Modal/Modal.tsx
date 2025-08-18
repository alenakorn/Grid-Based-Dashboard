import { useEffect } from 'react';
import './Modal.css';
import { ModalProps } from '../../types/dashboard';

function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modalOverlay"
      onClick={onClose}
    >
      <div
        className="modalContainer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modalHeader">
          {title && <h2 className="modalTitle">{title}</h2>}
          <button
            className="modalClose"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="modalContent">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;

