import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from '../services/api';

const ItemList = ({ onEdit }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    getItems().then(response => setItems(response.data));
  };

  const handleDelete = (id) => {
    deleteItem(id).then(fetchItems);
  };

  return (
    <div>
      <h2>Lista de Ítems</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => onEdit(item.id)}>Editar</button>
            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;