import React from 'react';
import Form from './Form';
import { Companies } from '../';

import '../../styles/FormAndBrands.css'

function FormAndBrands() {
  return (
    <div className='form-and-brands-container'>
      <div className="form___container">
        <Form />
      </div>
      <div className="brands___container">
        <h3 className="contact__cta">
          Join the thousands of innovators already building with us
        </h3>
        <div className="contact___companies">
          <Companies />
        </div>
      </div>
    </div>
  );
}

export default FormAndBrands;
