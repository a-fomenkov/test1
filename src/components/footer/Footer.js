import './style.css';

import vk from '../../img/icons/vk.svg';
import git from '../../img/icons/gitHub.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/katamarang11"
              ><img src={vk} alt="ВК"
                /></a>
            </li>
            <li className="social__item">
              <a href="https://github.com/katamarang11"
              ><img src={git} alt="gitHub"
                /></a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;