import { homePhoneMockup } from '../../assets';
import { EmailForm } from '../';
import { Link } from 'react-router-dom';

import '../../styles/Hero.css';

function Hero() {
  return (
    <header id='hero'>
      <div className="header__container">
        <figure>
          <img src={homePhoneMockup} alt="phone mockup" />
        </figure>

        <div className="header__main-container">
          <div className="hero-container">
            <h1>Start building with our APIs for absolutely free.</h1>
            <div className="email-form-container">
              <EmailForm />
            </div>
          </div>
          <p>
            Have any questions <Link to={'./contact'}>Contact Us</Link>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
