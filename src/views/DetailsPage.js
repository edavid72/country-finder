import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailsPage = ({ history }) => {
  const { country } = useParams();

  const [detailsCountry, setDetailsCountry] = useState([]);
  const [detailsWeather, setDetailsWeather] = useState([]);

  useEffect(() => {
    const consultAPICountries = async () => {
      try {
        const url = `https://restcountries.com/v2/name/${country}?fullText=true`;

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
    nativeName,
    currencies,
    alpha2Code,
  } = detailsCountry;

  useEffect(() => {
    const consultAPIWeather = async () => {
      if (!detailsCountry) return;

      const apiKey = `5b8f6620ace9b098cdf8de84f23d41ea`;

      const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${country},${alpha2Code}&appid=${apiKey}`;

      const response = await fetch(url2);
      const result = await response.json();

      setDetailsWeather(result);
    };
    consultAPIWeather();
  }, [alpha2Code, country, detailsCountry]);

  const { weather, main, id } = detailsWeather;

  /*  console.log(main); */
  //Todo:Button Back
  const handleClickBack = () => {
    /* history.push('/searchpage'); */
    history.goBack();
  };

  return (
    <>
      <div className="container animate__animated animate__bounceInLeft">
        <div className="back-contain">
          <button onClick={handleClickBack} className="btn-back">
            Back
          </button>
        </div>

        <div className="card-country">
          <div className="head-card">
            <div className="info-one">
              <h2>{capital}</h2>
              <h3>{name}</h3>
              <p>
                {weather &&
                  weather.map((desc) => {
                    return <span key={id}>{desc.description}</span>;
                  })}
              </p>
            </div>
            <div className="info-two">
              <p>
                <i className="fas fa-temperature-low"></i>
                {main && parseFloat(main.temp - 273.15).toFixed(2)}{' '}
                <span>&#x2103;</span>
              </p>

              <p>
                T Min:{main && parseFloat(main.temp_min - 273.15).toFixed(2)}
                <span>&#x2103;</span>{' '}
              </p>

              <p>
                T Max:{main && parseFloat(main.temp_max - 273.15).toFixed(2)}
                <span>&#x2103;</span>{' '}
              </p>
            </div>
          </div>

          <div className="card-data-country">
            <div className="card-flag">
              <img src={flag} alt="flag" />
            </div>
            <div className="data-country">
              <p>
                <i className="fab fa-fort-awesome-alt"></i>
                Capital: <span>{capital}</span>
              </p>
              <p>
                <i className="far fa-flag"></i>
                Native Name: <span>{nativeName}</span>
              </p>

              <p>
                <i className="fas fa-globe-americas"></i>
                Sub Region: <span>{subregion}</span>
              </p>

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
      </div>
    </>
  );
};

export default DetailsPage;
