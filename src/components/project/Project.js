import { NavLink } from 'react-router-dom';
import './style.css';

function Project({ title, img, id }) {
  return (
    <NavLink to={`/projectHome/${id}`}>
      <li className="project">
        <img
          className="project__img"
          src={img}
          alt={title}
        />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
}

export default Project;