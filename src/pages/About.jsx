import {
  Business,
  Culture,
  Heading,
  Navbar,
  People,
  Stats,
  Vision,
} from '../components';


function About() {
  const heading =
    'We empower innovators by delivering access to the financial system';
  
  return (
    <main id='about'>
      <Navbar />
      <Heading heading={heading} />
      <Vision />
      <Business />
      <Stats />
      <Culture />
      <People />
    </main>
  );
}

export default About;
