// src/components/ItemModal.jsx
import React from 'react';
import emailjs from 'emailjs-com';

function ItemModal({ item, onClose }) {
  const sendEmail = () => {
    const templateParams = {
      item_name: item.name,
      item_type: item.type,
      item_description: item.description,
    };

    emailjs
      .send(
        'service_8w8julb',     // Replace
        'template_t1rdsea',    // Replace
        templateParams,
        'r4tgdSUcj5VewmC0i'      // Replace
      )
      .then(() => {
        alert('Enquiry email sent successfully!');
      })
      .catch((error) => {
        alert('Failed to send email. Please try again.');
        console.error(error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{item.name}</h2>
        <p><strong>Type:</strong> {item.type}</p>
        <p>{item.description}</p>

        <div className="modal-carousel">
          <img src={item.coverImage} alt="Cover" />
          {item.additionalImages.map((img, i) => (
            <img key={i} src={img} alt={`Additional ${i}`} />
          ))}
        </div>

        <button className="enquire-btn" onClick={sendEmail}>
          Enquire
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
