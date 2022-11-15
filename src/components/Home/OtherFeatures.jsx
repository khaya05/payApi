import React from 'react';
import { features } from '../../contents';
import '../../styles/OtherFeatures.css';

function OtherFeatures() {
  return (
    <section id="other-features__section">
      <ul className='other-features_'>
        {features.map(({ id, title, icon, content }, index) => (
          <li key={id} className={`feature__${index} feature`}>
            <figure>
              <img src={icon} alt="" aria-hidden="true" />
            </figure>
            <h4>{title}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OtherFeatures;
