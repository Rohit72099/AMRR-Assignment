import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItem from './pages/AddItem';
import ViewItems from './pages/ViewItems';
import './App.css';
import shoes from './assets/shoes.jfif'
import icon from './assets/icon.png'

function App() {
  // Static fallback items
  const initialItems = [
    {
      name: 'Running Shoes',
      type: 'Shoes',
      description: 'Durable and lightweight shoes for all terrains.',
      coverImage:shoes,
      additionalImages: [
        'https://via.placeholder.com/300x200?text=Side+View',
        'https://via.placeholder.com/300x200?text=Sole+View'
      ]
    },
    {
      name: 'Fitness Band',
      type: 'Sports Gear',
      description: 'Tracks your heart rate, steps, and calories.',
      coverImage:icon,
      additionalImages: [
        'https://via.placeholder.com/300x200?text=Display',
        'https://via.placeholder.com/300x200?text=Charging+Port'
      ]
    }
  ];

  const [items, setItems] = useState(initialItems);

 
  useEffect(() => {
    fetch('http://localhost:3000/api/items') 
      .then((res) => res.json())
      .then((data) => setItems([...initialItems, ...data])) 
      .catch((err) => console.error('Error fetching items:', err));
  }, []);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <header className="navbar">
        <div className="navbar-container">
          <Link to="/" className="nav-link">View Items</Link>
          <Link to="/add" className="nav-link">Add Item</Link>
        </div>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ViewItems items={items} />} />
          <Route path="/add" element={<AddItem addItem={addItem} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
