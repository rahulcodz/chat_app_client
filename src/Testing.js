import { useState } from 'react';
import axios from 'axios';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [err, setErr] = useState(null)

  

  function makeGetRequest(path) {
    axios.get(path).then(
        (response) => {
            var result = response.data;
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );
}
makeGetRequest('https://jsonplaceholder.typicode.com/todos/5');




//  

   
  


  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      setNameError('Name is required');
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
   

    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
    
    
    setErr("Form submitted successfully")
    // Clear form fields
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => {setName(e.target.value); if (!e.target.value) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }}} />
        {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value);if (!e.target.value) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }}} />
        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value); if (!e.target.value) {
      setPasswordError('Password is required');
    } else if (e.target.value.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }}} />
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      </div>
      <button type="submit">Submit</button>
      <div className='submit_err'>{err}</div>
    </form>
  );
}

export default Form;

