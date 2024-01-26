// To use state we need hooks
// import React from 'react';
// const useState = React.useState;

// Object deconstruction
import {useState} from 'react';

function Card(props) {
    // useState function brings back an array
    // default value passed through useState
    // const [itemName, setItemName] = useState('');
    console.log('CARD PROPS', props.grocery.Name);

    return(
    <div className="card">
        <h3>{props.grocery.Name}</h3>
        <p>{Number(props.grocery.Quantity)} {props.grocery.Unit}</p>
        <button className="btn">Buy</button>
        <button className="btn">Remove</button>
    </div>
    );
};

export default Card;