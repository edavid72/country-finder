import React from 'react';
import { Link } from 'react-router-dom';

const CountryFlag = ({ dataAPI }) => {
  const { name, flag } = dataAPI;

  /* console.log(name, flag); */
  return (
    <>
      <div className="card animate__animated animate__bounceInUp">
        <img src={flag} alt="flag" className="card-img" />
        <p className="card-p">{name}</p>

        <Link to={`/detailspage/${name}`} type="button" className="btn-more">
          More info
        </Link>
      </div>
    </>
  );
};

export default CountryFlag;
