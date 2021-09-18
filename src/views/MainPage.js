import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const MainPage = () => {
  const [mainFlags, setMainFlags] = useState([]);
  useEffect(() => {
    const mainContent = async () => {
      const url = `https://restcountries.eu/rest/v2/all`;

      const response = await fetch(url);
      const result = await response.json();

      setMainFlags(result);
    };
    mainContent();
  }, []);
  return (
    <div className="main-flags animate__animated animate__fadeIn">
      <div className="main-content">
        {mainFlags.map((flag) => {
          return (
            <div key={flag.name} className="flags">
              <img src={flag.flag} alt="" className="flag" key={flag.name} />
              <h2 key={flag.area}>{flag.name}</h2>
              <Link
                to={`/detailspage/${flag.name}`}
                type="button"
                className="btn-more"
              >
                More info
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
