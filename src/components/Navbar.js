import React, { useState, useEffect } from 'react';
import { FaCoins } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem('LOGGED_IN');
    if (data !== null) setLoggedIn(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('LOGGED_IN', JSON.stringify(loggedIn));
  }, [loggedIn]);

  return (
    <div className="heading">
      <Link to="/">
        <div className="navbar">
          <FaCoins className="icon" />
          <h1>
            Display <span className="blue">Crypto</span>
          </h1>
        </div>
      </Link>
      {loggedIn && (
        <Link to="/favorites">
          <Button
            variant="contained"
            className="login"
            sx={{
              marginRight: 10,
            }}
          >
            Favorites
          </Button>
        </Link>
      )}
      {loggedIn ? null : (
        <Button
          variant="contained"
          className="login"
          sx={{
            marginRight: 10,
          }}
          onClick={() => {
            setLoggedIn(true);
          }}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default Navbar;
