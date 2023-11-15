/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
// import {jwt_decode}from 'jwt-decode'

export const Login = () => {
  // const navigate = useNavigate();

  const [, setUser] = useState({});

  const handleCallbackResponse = async (response) => {
    console.log("Encoded JWT ID token :" + response.credential);

    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);

    const token1 = response.credential;

    localStorage.setItem("authToken1", token1);

    if (token1) {
      navigate("/");
    } else {
      console.log("something is wrong");
    }
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "203571099479-vm468bu6b2unhlq9jb4mcua8l8p20bvo.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  });

  const [signinValues, setSigninValues] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(signinValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/users/login", signinValues);
      const token = response.data.data.token;
      const userId = response.data.data.userId;

      console.log("Login successful:", response.data.message);
      console.log(token, userId);

      localStorage.setItem("authUserId", userId);
      localStorage.setItem("authToken", token);

      // if (token) {
      //   navigate("/");
      // } else {
      //   navigate("/register");
      // }
    } catch (error) {
      console.error("Login error:", error);
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
        <Form onSubmit={handleSubmit}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              name="userName"
              value={signinValues.userName}
              onChange={handleChange}
            />
            <label htmlFor="floatingInputCustom">Enter your name</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              name="password"
              value={signinValues.password}
              onChange={handleChange}
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>

          <Nav.Link
            className="mt-3"
            style={{ color: "blue" }}
            onClick={() => navigate("/register")}
          >
            Already have an account ? Signup
          </Nav.Link>
          <Button variant="success" type="submit" className="mt-4">
            Login
          </Button>
        </Form>
        <div
          style={{ marginTop: "20px", paddingLeft: "40px" }}
          id="signInDiv"
        ></div>
      </div>
    </>
  );

};
