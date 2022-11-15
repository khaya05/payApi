import {
  Brands,
  SimpleUI,
  EasyToImplement,
  OtherFeatures,
  EmailForm,
} from '../';

import '../../styles/Features.css'

function Features() {
  return (
    <>
      <Brands />
      <EasyToImplement />
      <SimpleUI />
      <OtherFeatures />
      <div className="Features__features-container">
        <h2>Ready to start?</h2>
        <EmailForm />
      </div>
    </>
  );
}

export default Features;
