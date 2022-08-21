import React, { useState } from "react";
import "./styles.css";
import userService from '../services/user.service';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function Register( {onSubmit}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const addUser = (e) => {
    e.preventDefault();
    
    setIsSubmitted(true);
    onSubmit(true);
    const user = {username, password};
    userService.add(user)
      .then(response => {
            console.log('User added successfully!', response.data);
            navigate("/home");
      })
      .catch(error => {
          console.log('Something went wrong: ', error);
      })
}

  const renderForm = (
    <div className="form">
      <form onSubmit={(e) => addUser(e)}>
        <div className="input-container">
          <TextField 
            InputLabelProps={{shrink: true,}} 
            id="username" 
            name="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            type="text" 
            label="Username" 
            variant="filled" 
            fullWidth 
            required/>
        </div>
        <div className="input-container">
          <TextField 
              InputLabelProps={{shrink: true,}} 
              id="password" 
              name="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              type="password" 
              label="Password" 
              variant="filled" 
              fullWidth 
              required/>
        </div>
        <div className="button-container">
          <Button 
              variant="contained" 
              style={{backgroundColor:'blue', marginTop:'10px'}} 
              type="submit">
              Sign up
          </Button> 
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Register</div>
            {renderForm}
      </div>
    </div>
  );
}
  
  export default Register;