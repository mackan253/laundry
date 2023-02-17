import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("api/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password, Discriminator: "user"}),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
    <h1>Create User</h1>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="username" hidden>Username</Label>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password" hidden>Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" color="primary">
        Create User
      </Button>
    </Form>
  </div>
  );
};

export default CreateUser;
