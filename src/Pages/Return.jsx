import React, { useEffect, useState } from "react";
import axios from "axios";

const Return = () => {
    const [returned, setReturned] = useState([]);
    const getDetails = async () => {
        try {
            const response = await axios.get("http://localhost:3000/details");
            setReturned(response.data.Data);
            console.log("nahi", response.data.Data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDetails();
    }, []);

    const returnHandler = () =>{   

    }

    return (
        <>
            <h1>RETURN DETAILS</h1>
            <hr />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Movie Name</th>
                        <th scope="col">Return Date</th>
                        <th scope="col">Recieved Charge</th>
                        <th scope="col">Total Charge</th>
                    </tr>
                </thead>

                <tbody>
                    {returned.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>
                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: "0",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1rem",
                                    }}
                                >
                                    {item.movies.map((movies, movieIndex) => (
                                        <li key={movieIndex} style={{ border: "1px solid black", height: "30px" }}>
                                            {movies.movieName}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                            <ul
                                    style={{
                                        listStyle: "none",
                                        padding: "0",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1rem",
                                    }}
                                >
                                    {item.movies.map((noOfDays, movieIndex) => (
                                        <li key={movieIndex} style={{ border: "1px solid black", height: "30px" }}>
                                            {noOfDays.noOfDays}
                                        </li>
                                    ))}
                                </ul>
                                
                            </td>
                            <td >

                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: "0",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1rem",
                                        alignItems:"center"
                                    }}
                                >
                                    {item.movies.map(() => (

                                    <li  style={{ height: "30px" }}>
                                        <button onClick={returnHandler}>returned</button>
                                    </li>
                                    ))}
                                </ul>
                            </td>
                            <td>{item.totalAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Return;
