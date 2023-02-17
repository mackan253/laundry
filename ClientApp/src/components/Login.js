import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <h1>Login</h1>
        <Link to="/CreateUser">
          <Button color="primary">Create User</Button>
        </Link>
      </div>
    </>
  );
};

export default Login;
