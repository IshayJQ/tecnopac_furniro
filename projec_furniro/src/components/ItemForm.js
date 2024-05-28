import React, { useState, useEffect } from 'react';
import { createItem, getItem, updateItem } from '../services/api';

const ItemForm = ({ itemId, onSave }) => {
  const [item, setItem] = useState({ name: '', description: '' });

  useEffect(() => {
    if (itemId) {
      getItem(itemId).then(response => setItem(response.data));
    }
  }, [itemId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem(prevItem => ({ ...prevItem, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemId) {
      updateItem(itemId, item).then(onSave);
    } else {
      createItem(item).then(onSave);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input
          type="text"
          name="description"
          value={item.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ItemForm;