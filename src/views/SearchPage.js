import React, { useEffect, useState } from 'react';
import CountryFlag from '../components/CountryFlag';
import Form from '../components/Form';

const SearchPage = () => {
  //Todo:: State: Form Info
  const [dataForm, setDataForm] = useState('');
  //Todo:: State: API data container
  const [dataAPI, setDataAPI] = useState([]);
  //Todo: State to define which components to display at startup
  const [startProcess, setStartProcess] = useState(false);

  useEffect(() => {
    const consultAPI = async () => {
      //!Avoid "GET API" action when loading the page for the first time
      if (dataForm === '') return;

      const url = `https://restcountries.eu/rest/v2/name/${dataForm}?fullText=true`;

      const response = await fetch(url);
      const result = await response.json();

      setDataAPI(result[0]);

      if (result[0]) {
        setStartProcess(true);
      } else {
        setStartProcess(false);
      }
    };

    consultAPI();
  }, [dataForm]);

  return (
    <>
      <div className="container search-page">
        <h2>
          <i className="fas fa-atlas"></i>Find Country Here
        </h2>

        <Form setDataForm={setDataForm} />

        {startProcess ? <CountryFlag dataAPI={dataAPI} /> : null}
      </div>
    </>
  );
};

export default SearchPage;
