import React, { useState, useEffect } from "react";

function ApiCalls() {
  const [items, setItems] = useState([]); 
  const [newItem, setNewItem] = useState(""); 
  const [error, setError] = useState("");

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/items"); 
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setItems(data); 
    } catch (error) {
      setError(error.message);
    }
  };


  useEffect(() => {
    fetchItems();
  }, []);


  const addItem = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch("http://localhost:5000/api/items", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newItem }), 
      });

      if (!response.ok) {
        throw new Error("Failed to add item");
      }

      setNewItem("");
      fetchItems();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Items List</h1>
      {/* Used to display errors.  */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li> 
        ))}
      </ul>

      <h2>Add New Item</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item name"
          required
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default ApiCalls;