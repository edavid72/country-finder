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
    languages,
    subregion,
    borders,
    nativeName,
    currencies,
  } = detailsCountry;

  //Todo:Button Back
  const handleClickBack = () => {
    history.push('/searchpage');
  };

  return (
    <>
      <div className="container">
        <div className="back-contain">
          <button onClick={handleClickBack} className="btn-back">
            Back
          </button>
        </div>

        <div className="card-country">
          <div className="card-flag">
            <img src={flag} alt="flag" />
          </div>
          <div className="card-data-country">
            <h2>{name}</h2>
            <div className="data-country">
              <p>
                <i className="far fa-flag"></i>
                Native Name: <span>{nativeName}</span>
              </p>

              <p>
                <i className="fab fa-fort-awesome-alt"></i>
                Capital: <span>{capital}</span>
              </p>

              <p>
                <i className="fas fa-globe-americas"></i>
                Sub Region: <span>{subregion}</span>
              </p>

              <div>
                <p>
                  <i className="fas fa-border-style"></i>Borders:{' '}
                </p>
                <ul>
                  {borders &&
                    borders.map((border) => {
                      return <li key={border}>{`${border}`}</li>;
                    })}
                </ul>
              </div>

              <div>
                <p>
                  <i className="fas fa-language"></i>Languages:{' '}
                </p>
                <ul>
                  {languages &&
                    languages.map((language) => {
                      return <li key={language.iso639_1}>{language.name}</li>;
                    })}
                </ul>
              </div>

              <div>
                <p>
                  <i className="fas fa-money-bill-wave"></i>Currencies:{' '}
                </p>
                <ul>
                  {currencies &&
                    currencies.map((currency) => {
                      return <li key={currency.name}>{currency.name}</li>;
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="card-weather"></div>
      </div>
    </>
  );
};

export default DetailsPage;
