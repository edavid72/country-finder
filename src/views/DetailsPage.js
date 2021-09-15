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

  const { flag, name, capital, subregion, population, borders, nativeName } =
    detailsCountry;

  console.log(`pais: ${name} y Ciudad: ${capital}`);

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
      </div>
    </>
  );
};

export default DetailsPage;
