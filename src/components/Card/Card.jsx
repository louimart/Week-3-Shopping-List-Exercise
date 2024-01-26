// To use state we need hooks
// import React from 'react';
// const useState = React.useState;

// Object deconstruction
// import { useState } from 'react';
import Button from '@mui/material/Button';
// import { deleteGrocery } from '../../groceryApi/grocery.api';
// import { refreshGrocery } from '../App/App';

function Card(props) {
  // function Card({ groceryList, refreshGroceryCallback }) {
  // useState function brings back an array
  // default value passed through useState
  // const [itemName, setItemName] = useState('');
  // console.log('CARD PROPS', props.grocery.Name);

  console.log('CARD PROPS', props.Name);

  // const handleClickDelete = (id) => {
  //   // ID item
  //   console.log('DELETE - groceryId:', id);
  //   // MAKE Axios Call
  //   deleteGrocery(id)
  //     .then((response) => {
  //       refreshGroceryCallback();
  //     })
  //     .catch((err) => {
  //       console.error('ERROR:', err);
  //     });
  // };

  return (
    <div className="card">
      <h3>{props.grocery.Name}</h3>
      <p>
        {Number(props.grocery.Quantity)} {props.grocery.Unit}
      </p>
      <button
        variant="contained"
        color="secondary"
        size="small"
        className="btn"
      >
        Buy
      </button>
      <Button
      // variant="contained"
      // color="primary"
      // size="small"
      // className="btn"
      // onClick={(event) => {
      //   event.preventDefault();
      //   handleClickDelete(props.grocery.id);
      // }}
      >
        Remove
      </Button>
    </div>
  );
}

export default Card;
