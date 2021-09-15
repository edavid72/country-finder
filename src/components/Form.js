import React, { useState } from 'react';
import ErrorAlert from './ErrorAlert';

const Form = ({ setDataForm }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);

  //! Read the search term, every time it changes */
  const handleChangeForm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    //!Validate //
    if (searchTerm.trim() === '') {
      setErrorMsg(true);
      return;
    }
    setErrorMsg(false);

    setDataForm(searchTerm);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="put the country here"
          className="form-control"
          onChange={handleChangeForm}
        />
        <input type="submit" className="btn btn-search" value="Search" />
      </form>

      {errorMsg ? (
        <ErrorAlert message="The input must not be empty or contain a valid value" />
      ) : null}
    </>
  );
};

export default Form;
