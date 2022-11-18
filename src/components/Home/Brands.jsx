import { Link } from 'react-router-dom';
import { ReactComponent as Tesla } from '../../assets/shared/desktop/tesla.svg';
import { ReactComponent as Microsoft } from '../../assets/shared/desktop/microsoft.svg';
import { ReactComponent as HP } from '../../assets/shared/desktop/hewlett-packard.svg';
import { ReactComponent as Oracle } from '../../assets/shared/desktop/oracle.svg';
import { ReactComponent as Google } from '../../assets/shared/desktop/google.svg';
import { ReactComponent as Nvidia } from '../../assets/shared/desktop/nvidia.svg';
import '../../styles/Brands.css';

function Brands() {
  return (
    <section id="brands">
      <div className="brands__container">
        <div className="brands__left">
          <h2>Who we work with</h2>
          <p>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.{' '}
          </p>
          <Link to="./about">about us</Link>
        </div>
        <ul className="brands__right">
          <li className="brand-icon">
            <Tesla />
          </li>
          <li className="brand-icon">
            <Microsoft />
          </li>
          <li className="brand-icon">
            <HP />
          </li>
          <li className="brand-icon">
            <Oracle />
          </li>
          <li className="brand-icon">
            <Google />
          </li>
          <li className="brand-icon">
            <Nvidia />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Brands;
