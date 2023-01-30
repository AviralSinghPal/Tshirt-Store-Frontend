import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #333;
  color: #fff;
  
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #555;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: #fff;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // send formData to your API for sign up
  };

  return (
    <Container>
    <Heading>Join our community and elevate your shopping experience</Heading>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <Input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <Input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
