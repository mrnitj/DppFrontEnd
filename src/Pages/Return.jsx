import React, { useEffect } from "react";
import axios from "axios";

const Return = () => {
    const getDetails = async () => {
        try {
            const response = await axios.get("http://localhost:3000/details");
            console.log(response.data.Data);
        } catch (error) {}
    };

    useEffect(() => {
        getDetails();
    }, []);

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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td style={{ padding: "0" }}>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: "0",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                            </ul>
                        </td>
                        <td style={{ padding: "0" }}>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: "0",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                            </ul>
                        </td>

                        <td style={{ padding: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: "0",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                <li style={{ border: "1px solid black", height: "30px" }}>
                                    <button>returned</button>
                                </li>
                                <li style={{ border: "1px solid black", height: "30px" }}>
                                    <button>returned</button>
                                </li>
                                <li style={{ border: "1px solid black", height: "30px" }}>
                                    <button>returned</button>
                                </li>
                                <li style={{ border: "1px solid black", height: "30px" }}>
                                    <button>returned</button>
                                </li>
                            </ul>
                        </td>
                        <td>Mark</td>
                    </tr>

                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td style={{ padding: "0" }}>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: "0",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                            </ul>
                        </td>
                        <td style={{ padding: "0" }}>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: "0",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                                <li style={{ border: "1px solid black", height: "30px" }}>d</li>
                            </ul>
                        </td>

                        <td style={{ padding: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: "0",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                <li style={{ border: "1px solid black", height: "30px" }}>
                                    <button>returned</button>
                                </li>
                                <li style={{ border: "1px solid black", height: "30px" }}>
                                    <button>returned</button>
                                </li>
                                <li style={{ border: "1px solid black", height: "30px" }}>
                                    <button>returned</button>
                                </li>
                                <li style={{ border: "1px solid black", height: "30px" }}>
                                    <button>returned</button>
                                </li>
                            </ul>
                        </td>
                        <td>Mark</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Return;
