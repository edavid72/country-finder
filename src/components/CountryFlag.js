import React from 'react';
import { Link } from 'react-router-dom';

const CountryFlag = ({ dataAPI }) => {
  return (
    <>
      <div className="card">
        <img src={dataAPI.flag} alt="flag" className="card-img" />
        <p className="card-p">{dataAPI.name}</p>

        <Link
          to={`/detailspage/${dataAPI.name}`}
          type="button"
          className="btn-more"
        >
          See More
          <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </>
  );
};

export default CountryFlag;
