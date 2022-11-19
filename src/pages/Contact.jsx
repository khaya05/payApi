import React from 'react'
import { FormAndBrands, Heading } from '../components';

function Contact() {
  return (
    <main className='contact-page'>
      <Heading heading="Submit a help request and we’ll get in touch shortly." />
      <FormAndBrands />
    </main>
  );
}

export default Contact