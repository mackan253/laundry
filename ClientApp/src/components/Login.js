import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const requestBody = {username: username, password: password };
      console.log(requestBody);
      const response = await fetch('/api/users/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      console.log(response);
      if (response.status === 200) {
        const user = await response.json();
        console.log(user);
        localStorage.setItem('username', user.username);
        history.push('/');
        window.location.reload();
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.log(error);
      alert('Login failed');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <Button color="primary" type="submit">Login</Button>
      </Form>
      <Link to="/CreateUser">Create User</Link>
    </>
  );
};

export default Login;
