import React from 'react';
import { plans } from '../../contents';
import { FaCheck } from 'react-icons/fa';
import '../../styles/Plans.css';

function Plans() {
  return (
    <main className="pricing-plans-container">
      {plans.map(({ id, plan, features, price, description }) => (
        <div className="plan-container" key={id}>
          <h4>{plan} plan</h4>
          <p className='plan-description'>{description }</p>
          <h3>${price}</h3>

          <ul className="plan-features">
            {features.map(({ feature, id, included }) => (
              <li key={id}>
                <div className="check">
                  {included ? (
                      <FaCheck />
                  ) : (
                    <div className="empty-div"></div>
                  )}
                </div>

                <p className={`${included ? 'feature included' : 'feature'}`}>
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          <button type="button" className="request-access">
            request access
          </button>
        </div>
      ))}
    </main>
  );
}

export default Plans;