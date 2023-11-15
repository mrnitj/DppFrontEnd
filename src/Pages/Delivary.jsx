import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Delivary = () => {
    const nameRef = useRef(null);
    const movieRef = useRef(null);
    const daysRef = useRef(null);
    const priceRef = useRef(null);

    const [days, setDays] = useState(1);
    const [price, setPrice] = useState(50);
    const [products, setProducts] = useState([]);
    const [fullData, setFullData] = useState([]);
    console.log("datas-----------", products);
    console.log("fulldatas----------------", fullData);

    const addMovieHandler = () => {
        const Movie = movieRef.current.value;
        const Day = daysRef.current.value;

        setProducts((prevProducts) => [
            ...prevProducts,
            {
                movie: Movie,
                day: Day,
            },
        ]);

        movieRef.current.value = "";
        daysRef.current.value = "";
    };

    const addFullDataHandler = () => {
        const Name = nameRef.current.value;

        setFullData((prevFullData) => [
            ...prevFullData,
            {
                Name: Name,
                data: products,
            },
        ]);
    };

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
                    <Form.Control id="userNameInput" type="text" name="userName" ref={nameRef} />
                    <label htmlFor="userNameInput">Enter your name</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control id="movieNameInput" type="text" name="movie" ref={movieRef} />
                    <label htmlFor="movieNameInput">Movie Name</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control
                        id="daysInput"
                        type="number"
                        name="days"
                        value={days}
                        ref={daysRef}
                        onChange={(e) => {
                            const enteredDays = parseInt(e.target.value, 10);
                            setDays(enteredDays);
                            setPrice(enteredDays * 50);
                        }}
                    />
                    <label htmlFor="daysInput">Days</label>
                </Form.Floating>

                <label htmlFor="priceInput">Price</label>
                <Form.Control id="priceInput" type="number" name="price" value={price} readOnly ref={priceRef} />
                <div style={{ marginTop: "20px", paddingLeft: "40px" }} id="signInDiv">
                    <button onClick={addMovieHandler}>add</button>
                    <button onClick={addFullDataHandler}>Submit</button>
                </div>
            </div>
        </>
    );
};

export default Delivary;
