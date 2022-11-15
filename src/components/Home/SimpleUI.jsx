import { simpleUIIcon } from '../../assets';
import '../../styles/SimpleUI.css';

function SimpleUI() {
  return (
    <section id="simple-ui">
      <div className="section__container">
        <figure className="simple-ui-figure-container section__figur">
          <img src={simpleUIIcon} alt="" aria-hidden="true" />
        </figure>
        <div className="simple-ui__right section__right">
          <h2>Simple UI & UX</h2>
          <p className="section__p">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SimpleUI;
