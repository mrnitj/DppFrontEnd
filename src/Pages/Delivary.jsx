import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Delivary = () => {
    
    const [days, setDays] = useState(1)
    const [price, setPrice] = useState(50)
  return (
    <>
    <div
        className="h-auto w-25  align-content-center  justify-content-center  mt-5 "
        style={{
            paddingTop: "100px",
            marginLeft: "35%",
            borderRadius: "0px",
        }}
    >
   <Form.Floating className="mb-3">
    <Form.Control
        id="userNameInput"
        type="text"
        name="userName"
    />
    <label htmlFor="userNameInput">Enter your name</label>
</Form.Floating>

<Form.Floating className="mb-3">
    <Form.Control
        id="movieNameInput"
        type="text"
        name="movie"
    />
    <label htmlFor="movieNameInput">Movie Name</label>
</Form.Floating>

<Form.Floating className="mb-3">
    <Form.Control
        id="daysInput"
        type="number"
        name="days"
        value={days}
        onChange={(e) => {
            const enteredDays = parseInt(e.target.value, 10);
            setDays(enteredDays);
            setPrice(enteredDays * 50);
        }}
    />
    <label htmlFor="daysInput">Days</label>
</Form.Floating>

<label htmlFor="priceInput">Price</label>
<Form.Control
    id="priceInput"
    type="number"
    name="price"
    value={price}
    readOnly
    
/>
 <div style={{ marginTop: "20px", paddingLeft: "40px" }} id="signInDiv">
    <button onClick={addMovieHandler}>add</button>
 </div>
</div>
</>
  )
}

export default Delivary