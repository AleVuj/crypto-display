import axios from 'axios';
import './Coin.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';

import './Coin.css';

const Coin = ({ data }) => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [favorites, setFavorites] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const dataId = window.localStorage.getItem('id');
    if (dataId !== null) setFavorites(JSON.parse(dataId));
  }, []);

  useEffect(() => {
    localStorage.setItem('id', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div>
      <div className="headings">
        <p>Name</p>
        <p>Last price</p>
        <p>High</p>
        <p>Low</p>
      </div>
      <div className="coin-row">
        <div className="img-symbol">
          {coin.image ? <img src={coin.image.small} alt="" /> : null}

          <p>{coin.name}</p>
        </div>
        {coin.market_data?.current_price ? (
          <p>${coin.market_data.current_price.usd.toLocaleString()}</p>
        ) : null}
        {coin.market_data?.high_24h ? (
          <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
        ) : null}
        {coin.market_data?.low_24h ? (
          <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
        ) : null}
      </div>

      <Button
        variant="contained"
        sx={{
          marginLeft: 2,
        }}
        onClick={() => {
          setFavorites(coin.id);
          // window.localStorage.setItem('id', JSON.stringify(coin.id));
        }}
      >
        Add to favorites
      </Button>

      <Button
        variant="contained"
        color="error"
        sx={{
          marginLeft: 2,
        }}
      >
        Remove from favorites
      </Button>
    </div>
  );
};

export default Coin;
