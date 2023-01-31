import imgBtn from './gitHub-black.svg';
import './style.css';

function BtnGitHub({ link }) {
  return (
    <a href={link} target="blank" className="btn-outline">
      <img src={imgBtn} alt="Иконка" />
      GitHub repo
    </a>
  );
}

export default BtnGitHub;