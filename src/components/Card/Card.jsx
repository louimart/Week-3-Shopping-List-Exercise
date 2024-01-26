// To use state we need hooks
// import React from 'react';
// const useState = React.useState;

// Object deconstruction
import { useState } from "react";
import Button from "@mui/material/Button";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Card(props) {
  // useState function brings back an array
  // default value passed through useState
  // const [itemName, setItemName] = useState('');
  console.log("CARD PROPS", props.grocery.Name);

  return (
    <div className="card">
      <Typography component="div" variant="body1">
        <Box sx={{ color: "info.main" }}><h3>{props.grocery.Name}</h3></Box>
      </Typography>
      <p>
        {Number(props.grocery.Quantity)} {props.grocery.Unit}
      </p>
      <Button variant="outlined" color="primary" size="small" className="btn">
        Buy
      </Button>
      <Button variant="outlined" color="error" size="small" className="btn">
        Remove
      </Button>
    </div>
  );
}

export default Card;
