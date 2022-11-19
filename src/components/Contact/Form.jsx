import React, { useState } from 'react';
import FormInput from './FormInput';
import { inputs } from './inputs';

import '../../styles/Form.css';

function Form() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    companyName: '',
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormInput {...input} on onChange={handleChange} key={input.id} />
      ))}
      <div className="checkbox__container">
        <label htmlFor="subscribe" className='label'>
          Stay up-to-date with company announcements and updates to our API
          <input type="checkbox" name="subscribe" className="checkbox" checked />
          <span className="mark"></span>
        </label>
      </div>
      <button type="button" className="secondary-button">
        submit
      </button>
    </form>
  );
}

export default Form;

// https://github.com/safak/youtube/blob/react-form/src/App.jsx
