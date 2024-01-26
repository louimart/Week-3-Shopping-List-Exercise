import React from 'react';

import Header from '../Header/Header.jsx';
import './App.css';
import Card from '../Card/Card.jsx';

import { useState, useEffect } from 'react';

import { fetchGrocery } from '../../groceryApi/grocery.api';
import AddGroceryForm from '../AddGroceryForm/AddGroceryForm';

function App() {
  const [groceryList, setGroceryList] = useState([
    // { name: 'Unicorn', origin: 'Britain' },
    // { name: 'Sphinx', origin: 'Egypt' },
    // { name: 'Jackalope', origin: 'America' },
  ]);

  const refreshGrocery = () => {
    const groceryPromise = fetchGrocery();
    groceryPromise
      // success
      .then((response) => {
        console.log('SERVER DATA:', response);
        setGroceryList(response.data);
      })
      // failure
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  // initial load of component
  useEffect(() => {
    // body of effect
    console.log('Initial GET call on Page Load');
    // api call
    refreshGrocery();
  }, []);

  return (
    <div>
      <Header />
      <h1>Add an Item</h1>
      <AddGroceryForm groceryRefreshCallback={refreshGrocery} />
      <p>
        <h1>Shopping List</h1>
        <button className="btn">Reset</button>
        <button className="btn">Clear</button>
      </p>
      {/* HOW do we render a list??? */}
      {/* .map loops through the list of items in the groceryData array being passed through
      rendering a CARD for each item. */}
      {groceryList.map((groceryData, dataIndex) => {
        return (
          <div className="item-list" key={dataIndex}>
            <Card grocery={groceryData} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
