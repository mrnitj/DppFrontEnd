import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";

const Delivary = () => {
    const nameRef = useRef(null);
    const movieRef = useRef(null);
    const daysRef = useRef(null);
    const priceRef = useRef(null);

    const [days, setDays] = useState(1);
    const [price, setPrice] = useState(50);
    const [movies, setMovies] = useState([]);
    const [fullData, setFullData] = useState([]);
    console.log("datas-----------", movies);
    console.log("fulldatas----------------", fullData);

    const addMovieHandler = () => {
        const movieName = movieRef.current.value;
        const noOfDays = daysRef.current.value;

        setMovies((prevProducts) => [
            ...prevProducts,
            {
                movieName: movieName,
                noOfDays: noOfDays,
            },
        ]);

        movieRef.current.value = "";
        daysRef.current.value = "";
    };

    const addFullDataHandler = async () => {
        const name = nameRef.current.value;

        const body = {
            username: name,
            movies: movies,
        };
        console.log("body------", body);

        try {
            const response = await axios.post("http://localhost:3000/addmovie", body);

            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h1>DELIVERY DETAILS</h1>
            <hr />
            <div
                className="h-auto w-25  align-content-center  justify-content-center  mt-5 "
                style={{
                    paddingTop: "50px",
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
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    {movies.map((movie) => {
                        return <p>{movie.movieName},</p>;
                    })}
                </div>

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
                <div style={{ marginTop: "20px", paddingLeft: "40px",display:"flex", flexDirection:'column',padding:"20px 50px",  gap:'1rem' }} id="signInDiv">
                    <button onClick={addMovieHandler} style={{border:"1px solid grey", padding:"0.5rem" ,borderRadius:"50px", fontWeight:"bold", backgroundColor:'transparent'}}>add movie</button>
                    <button onClick={addFullDataHandler} style={{border:"1px solid grey", padding:"0.5rem", borderRadius:"50px", fontWeight:"bold", backgroundColor:'transparent'}}>submit</button>
                </div>
            </div>
        </>
    );
};

export default Delivary;
