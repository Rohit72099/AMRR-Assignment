import React, { useState } from 'react';

function AddItem() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [success, setSuccess] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!name || !type || !description || !coverImage) return;

  // Convert images to base64 (
  const reader = new FileReader();
  reader.onloadend = () => {
    const base64Cover = reader.result;

    const additionalImageReaders = Array.from(additionalImages).map(file => {
      return new Promise((resolve) => {
        const r = new FileReader();
        r.onloadend = () => resolve(r.result);
        r.readAsDataURL(file);
      });
    });

    Promise.all(additionalImageReaders).then(base64AdditionalImages => {
      const newItem = {
        name,
        type,
        description,
        coverImage: base64Cover,
        additionalImages: base64AdditionalImages
      };

      //  API CALL to backend
      fetch('http://localhost:3000/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      })
        .then((res) => res.json())
        .then(() => {
        // addItem(newItem);
          setSuccess(true);
          setTimeout(() => setSuccess(false), 3000);
          setName('');
          setType('');
          setDescription('');
          setCoverImage(null);
          setAdditionalImages([]);
          e.target.reset();
        })
        .catch((err) => {
          console.error('Upload error:', err);
        });
    });
  };

  reader.readAsDataURL(coverImage);
};

  return (
    <div className="container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Item Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="text" placeholder="Item Type (Shirt, Shoes, etc.)" value={type} onChange={e => setType(e.target.value)} required />
        <textarea placeholder="Item Description" value={description} onChange={e => setDescription(e.target.value)} required />

        <label>Cover Image:</label>
        <input type="file" accept="image/*" onChange={e => setCoverImage(e.target.files[0])} required />

        <label>Additional Images:</label>
        <input type="file" accept="image/*" multiple onChange={e => setAdditionalImages(e.target.files)} />

        <button type="submit">Add Item</button>
        {success && <p className="success-message">Item successfully added</p>}
      </form>
    </div>
  );
}

export default AddItem;
