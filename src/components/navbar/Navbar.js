import { NavLink } from 'react-router-dom';
import BtnDarkMode from './../btnDarkMode/BtnDarkMode';
import './style.css'

function Navbar() {

  const activeLink = 'nav-list__link nav-list__link--active';
  const normaLink = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">

          <NavLink to='/' className="logo">
            <strong>Сайт</strong> портфолио
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normaLink}>
                Главная
              </NavLink>
            </li>
            <li className="nav-list">
              <NavLink to='/projects' className={({ isActive }) => isActive ? activeLink : normaLink}>Мини-Проекты</NavLink>
            </li>
            <li className="nav-list">
              <NavLink to='/contacts' className={({ isActive }) => isActive ? activeLink : normaLink}>Контакты</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;