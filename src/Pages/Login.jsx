/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import axios from "axios";
// import {jwt_decode}from 'jwt-decode'

export const Login = () => {
    const handleGoogleLogin = async () => {
        try {
            const data = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(data);
            const user = data.user;
            console.log(credential);
            console.log("user", user);

            try {
                const response = await axios.post("http://localhost:3000/user/googleauthlogin", user);
                console.log(response);
                localStorage.setItem("userid", response.data.Data);
                if (response.status == 200) {
                    toast.success(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 500,
                        onClose: () => {
                            navigate("/usermain");
                        },
                    });
                } else {
                    toast.warn("user not registered,please register", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2500,
                        // onClose: () => {
                        //   navigate('/');
                        // }
                    });
                }
            } catch (error) {
                toast.warn(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2500,
                    // onClose: () => {
                    //   navigate('/');
                    // }
                });
            }
        } catch (error) {
            toast.warn(err.response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2500,
                // onClose: () => {
                //   navigate('/');
                // }
            });
        }
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
                <Form>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            name="userName"
                            // value={signinValues.userName}
                            // onChange={handleChange}
                        />
                        <label htmlFor="floatingInputCustom">Enter your name</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            name="password"
                            // value={signinValues.password}
                            // onChange={handleChange}
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating>

                    <Nav.Link
                        className="mt-3"
                        style={{ color: "blue" }}
                        // onClick={() => navigate("/register")}
                    >
                        Already have an account ? Signup
                    </Nav.Link>
                    <div style={{display:'flex', alignItems:'center', gap:"1rem", flexDirection:"column", gap:"1rem", margin:"1rem"}}>

                    <Button  variant="success" type="submit" 
            onClick={handleGoogleLogin}
          >
            Login
          </Button>
                    <GoogleButton 
                    label="sign in with google"
                    type="light"
                    // style={{padding:'0 1rem', borderRadius:'20px'}}
                    
                    onClick={handleGoogleLogin} />
                    </div>
                </Form>
                <div style={{ marginTop: "20px", paddingLeft: "40px" }} id="signInDiv"></div>
            </div>
        </>
    );
};
