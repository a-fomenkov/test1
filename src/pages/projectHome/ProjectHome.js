import { useParams } from 'react-router-dom';

import { projects } from '../../helpers/projectsList';
import BtnGitHub from './../../components/btnGitHub/BtnGitHub';
import './style.css';

function ProjectHome() {

  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <img
            className="project-details__cover"
            src={project.imgBig}
            alt={project.title}
          />
          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          {project.gitHubLink && (
            <BtnGitHub link='https://github.com' />
          )}

        </div>
      </div>
    </main>
  );
}

export default ProjectHome;