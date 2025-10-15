/* eslint-disable react/prop-types */
import './ImageModal.css';

const ImageModal = ({ src, title, description, onClose }) => {
  if (!src) {
    return null; 
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        
        {/* Left Column for the Image */}
        <div className="modal-image-container">
          <img className="modal-content" src={src} alt={title} />
        </div>

        {/* Right Column for the Text */}
        <div className="modal-text-container">
          {title && <h3 className="modal-title">{title}</h3>}
          {description && <p className="modal-description">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;