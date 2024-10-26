import React, { useState, useEffect } from "react";
import config from '../../config';
import Loader from "../loader/Loader";

function ApiCalls() {
  const [items, setItems] = useState([]); 
  const [newItem, setNewItem] = useState(""); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${config.apiUrl}/api/items`); 
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setItems(data); 
      // console.log(data);
    } catch (error) {
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchItems();
  }, []);


  const addItem = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    try {
      const response = await fetch(`${config.apiUrl}/api/items`, { 
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
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      {
        loading ? (<Loader />)
          : (<div>
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
          </div>)
      }
    </>
  );
}

export default ApiCalls;
