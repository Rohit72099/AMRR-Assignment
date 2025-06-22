import React, { useState } from 'react';
import ItemModal from '../components/ItemModal';
import '../App.css';


function ViewItems({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="view-items-container">
      <h2>All Items</h2>
      <div className="item-grid">
        {items.map((item, index) => (
          <div className="item-card" key={index} onClick={() => setSelectedItem(item)}>
            <img src={item.coverImage} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

export default ViewItems;
