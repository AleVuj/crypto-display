import React from 'react';
import CoinItem from './CoinItem';
import './Coins.css';
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin';

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="headings">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Last</p>
          <p>Change</p>
          <p>Change Percent</p>
          <p>High</p>
          <p>Low</p>
        </div>

        {props.coins.map((coins) => {
          return <CoinItem coins={coins} key={coins.id} />;
        })}
      </div>
    </div>
  );
};

export default Coins;
