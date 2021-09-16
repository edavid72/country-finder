import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailsPage = ({ history }) => {
  const { country } = useParams();
  const [detailsCountry, setDetailsCountry] = useState([]);

  useEffect(() => {
    const consultAPICountries = async () => {
      try {
        const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;

        const response = await fetch(url);
        const result = await response.json();

        //!Send the API data to the state 'detailsCountry'  */
        setDetailsCountry(result[0]);
      } catch (e) {
        console.error(e);
      }
    };
    consultAPICountries();
  }, [country]);

  const {
    flag,
    name,
    capital,
    demonym,
    languages,
    subregion,
    population,
    borders,
    nativeName,
  } = detailsCountry;

  //Todo:Button Back
  const handleClickBack = () => {
    history.push('/searchpage');
  };

  return (
    <>
      <div className="container">
        <div>
          <button onClick={handleClickBack}>Back</button>
        </div>

        <div className="card-country">
          <div className="card-flag">
            <img src={flag} alt="flag" />
          </div>
          <div className="card-data-country">
            <h2>{name}</h2>
            <p>
              Capital: <span>{capital}</span>
            </p>
            <p>
              Demonym: <span>{demonym}</span>
            </p>
          </div>
        </div>

        <div className="card-weather"></div>
      </div>
    </>
  );
};

export default DetailsPage;
