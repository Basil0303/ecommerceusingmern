import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import { loginUser } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import backgroundImage from "../img/blue-background-online-ordering-bacblue-digital-technology-background-online-shopping-with-resolution-2880x1800-high-quality-online-shopping.jpg"; // Change the import path to your image file

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error, success } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/home";
    }
  }, []);

  function login(event) {
    event.preventDefault();
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div
      className="wrapper d-flex align-items-center justify-content-center r-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="login-rounded ">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <Form>
              <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                <Form.Label className="mx-2">Email address</Form.Label>
                <Form.Control
                  className="mx-2"
                  value={email}
                  required
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3 mx-2" controlId="formBasicPassword">
                <Form.Label className="mx-2">Password</Form.Label>
                <Form.Control
                  className="mx-2"
                  value={password}
                  required
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button
                onClick={login}
                className=" w-100 mr-5 text-white"
                variant="primary"
                type="submit"
              >
                Login
              </Button>
            </Form>
          </>
        )}
      </div>
    </div>
  );
}
