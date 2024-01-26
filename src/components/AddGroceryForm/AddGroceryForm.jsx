import { useState } from 'react';
import { postGrocery } from '../../groceryApi/grocery.api';
import * as React from 'react';
import Button from '@mui/material/Button';
import { lightBlue } from '@mui/material/colors';

function AddGroceryForm(props) {
  const [nameValue, setNameValue] = useState('');
  const [quantityValue, setQuantityValue] = useState('');
  const [unitValue, setUnitValue] = useState('');

  // Functions to take input value and set to the properties.
  // called below in the RETURN
  const handleChangeOfName = (event) => {
    setNameValue(event.target.value);
  };
  const handleChangeOfQuantity = (event) => {
    setQuantityValue(event.target.value);
  };
  const handleChangeOfUnit = (event) => {
    setUnitValue(event.target.value);
  };

  const handleSubmitGrocery = (event) => {
    event.preventDefault();
    console.log('Values for SUBMIT:', {
      Name: nameValue,
      Quantity: quantityValue,
      Unit: unitValue,
    });

    // POST data to SERVER Database
    postGrocery({
      Name: nameValue,
      Quantity: quantityValue,
      Unit: unitValue,
    })
      .then((response) => {
        // on success fetchData
        props.groceryRefreshCallback();
        setNameValue('');
        setQuantityValue('');
        setUnitValue('');
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  return (
    <form onSubmit={handleSubmitGrocery}>
      <label>
        <span>Name:</span>
        <input
          id="name"
          onChange={handleChangeOfName}
          //   onChange={(event) => setNameValue(event.target.value)}
          value={nameValue}
        />
      </label>
      <label>
        <span>Quantity:</span>
        <input
          id="quantity"
          //   below calls on the function writted outside of return. Accomplishes the same as the inline function below.
          onChange={handleChangeOfQuantity}
          //   below accomplishes the same code. Function is written within the line
          //   onChange={(event) => setQuantityValue(Number(event.target.value))}
          value={quantityValue}
        />
      </label>
      <label>
        <span>Unit:</span>
        <input
          id="unit"
          onChange={handleChangeOfUnit}
          //   onChange={(event) => setUnitValue(event.target.value)}
          value={unitValue}
        />
      </label>
      <Button variant="outlined" type="submit">
        Save
      </Button>
    </form>
  );
}

export default AddGroceryForm;
