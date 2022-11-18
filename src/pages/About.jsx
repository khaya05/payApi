import {
  Business,
  Culture,
  Heading,
  People,
  Stats,
  Vision,
} from '../components';

function About() {
  const heading =
    'We empower innovators by delivering access to the financial system';
  return (
    <main>
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
