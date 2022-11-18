import React from 'react';
import Brands from '../Home/Brands';
import Form from './Form';
import { Companies } from '../';

function FormAndBrands() {
  return (
    <div>
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
