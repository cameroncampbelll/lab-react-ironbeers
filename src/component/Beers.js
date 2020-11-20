import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';

const Beers = (props) => {
  let [beers, setBeers] = useState([]);

  useEffect(() => {
    Axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((res) => {
      console.log(res?.data);
      setBeers(res?.data);
    });
  }, []);

  const ShowBeers = () => {
    return beers.map((eachBeer) => {
      return (
        <li>
          <Link to={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link>
        </li>
      );
    });
  };

  return <div>{ShowBeers()}</div>;
};

export default Beers;
