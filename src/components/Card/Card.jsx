// To use state we need hooks
// import React from 'react';
// const useState = React.useState;

// Object deconstruction

// import { useState } from 'react';
import { deleteGrocery, updateBuyStatus } from '../../groceryApi/grocery.api';
// import { refreshGrocery } from '../App/App';
import Button from '@mui/material/Button';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// function Card(props) {
function Card({ grocery, groceryRefreshCallback }) {
  // useState function brings back an array
  // default value passed through useState
  // const [itemName, setItemName] = useState('');

  // checking passed on data of 'grocery'
  // console.log('card groceryList', grocery);
  // console.log('card grocery name', grocery.Name);

  // PUT function to update BUY status
  const handleClickBuyStatus = (id) => {
    console.log('PUT update BUY status - groceryId:', id);
    updateBuyStatus(id)
      .then((response) => {
        groceryRefreshCallback();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  const handleClickDelete = (id) => {
    // ID item
    console.log('DELETE - groceryId:', id);
    // MAKE Axios Call
    deleteGrocery(id)
      .then((response) => {
        groceryRefreshCallback();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  const buyCard = (
    <div className="card">
      <Typography component="div" variant="body1">
        <Box sx={{ color: 'info.main' }}>
          <h3>{grocery.Name}</h3>
        </Box>
      </Typography>
      <p>
        {Number(grocery.Quantity)} {grocery.Unit}
      </p>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        className="btn"
        onClick={() => handleClickBuyStatus(grocery.id)}
        sx={{
          margin: '5px',
        }}
      >
        {`${grocery.Buy ? 'PURCHASED' : 'BUY'}`}
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className="btn"
        onClick={() => handleClickDelete(grocery.id)}
      >
        Remove
      </Button>
    </div>
  );

  const purchasedCard = (
    <div className="card-purchased">
      <Typography component="div" variant="body1">
        <Box variant="outlined" sx={{ color: 'success.main' }}>
          <h3>{grocery.Name}</h3>
        </Box>
      </Typography>
      <p>
        {Number(grocery.Quantity)} {grocery.Unit}
      </p>
      <Button
        variant="outlined"
        color="success"
        size="small"
        className="btn"
        onClick={() => handleClickBuyStatus(grocery.id)}
        sx={{
          margin: '5px',
          // filter: 'drop-shadow(5px 5px 5px lightgray)'
        }}
      >
        {`${grocery.Buy ? 'PURCHASED' : 'BUY'}`}
      </Button>
    </div>
  );

  return grocery.Buy ? purchasedCard : buyCard;
  // <div className="card">
  //   <Typography component="div" variant="body1">
  //     <Box sx={{ color: 'info.main' }}>
  //       <h3>{grocery.Name}</h3>
  //     </Box>
  //   </Typography>
  //   <p>
  //     {Number(grocery.Quantity)} {grocery.Unit}
  //   </p>
  //   <Button
  //     // variant="outlined"
  //     // color="primary"
  //     variant={`${grocery.Buy ? "outlined" : "contained"}`}
  //     color={`${grocery.Buy ? "success" : "primary"}`}
  //     size="small"
  //     className="btn"
  //     onClick={() => handleClickBuyStatus(grocery.id)}
  //     sx={{
  //       margin: "5px",
  //     }}
  //   >
  //     {`${grocery.Buy ? "PURCHASED" : "BUY"}`}
  //   </Button>
  //   <Button
  //     variant="contained"
  //     color="primary"
  //     size="small"
  //     className="btn"
  //     onClick={() => handleClickDelete(grocery.id)}
  //     // onClick={(event) => {
  //     //   event.preventDefault();
  //     //   handleClickDelete(props.grocery.id);
  //     // }}
  //   >
  //     Remove
  //   </Button>
  // </div>
}

export default Card;
