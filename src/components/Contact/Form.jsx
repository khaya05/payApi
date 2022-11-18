import React from 'react';
import FormInput from './FormInput';
import { inputs } from './inputs';

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
        <FormInput {...input} on onChange={handleChange} />
      ))}
    </form>
  );
}

export default Form;


// https://github.com/safak/youtube/blob/react-form/src/App.jsx