import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Pricing, Contact } from './pages';
import { Navbar, Footer, ReadyToStart } from './components';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <main id='main'>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <ReadyToStart />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
