import React, { useState } from "react";
import "./styles.css";
import userService from '../services/user.service';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function Login( {onSubmit}) {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [users, setUsers] = useState({});
  const navigate = useNavigate();

  React.useEffect(()=>{
    init();
  }, [])

  const init = () => {
    userService.getAll()
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("Something went wrong: ", error);
      })
  }

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    
    const userData = users.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        onSubmit(true);
        navigate("/home");
        console.log(isSubmitted)
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <TextField 
            InputLabelProps={{shrink: true,}} 
            id="uname" 
            name="uname"
            type="text" 
            label="Username" 
            variant="filled" 
            fullWidth 
            required/>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <TextField 
              InputLabelProps={{shrink: true,}} 
              id="pass" 
              name="pass"
              type="password" 
              label="Password" 
              variant="filled" 
              fullWidth 
              required/>
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <Button 
              variant="contained" 
              style={{backgroundColor:'blue', marginTop:'10px'}} 
              type="submit">
              Log in
          </Button> 
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
  
  export default Login;