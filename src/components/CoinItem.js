import React from 'react';
import './Coins.css';
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin';

const CoinItem = (props) => {
  return (
    <div className="coin-row">
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coins.image} alt="" />
        <Link
          to={`/coin/${props.coins.id}`}
          element={<Coin />}
          className="link"
        >
          {props.coins.symbol.toUpperCase()}
        </Link>
      </div>

      <p>${props.coins.current_price.toLocaleString()}</p>
      <p>${props.coins.price_change_24h.toFixed(5)}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p>${props.coins.high_24h.toLocaleString()}</p>
      <p>${props.coins.low_24h.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
