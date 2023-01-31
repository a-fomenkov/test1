import './header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Привет, меня зовут <em>Николай</em></strong>
          <br />
          Я начинающий
          <br />
          фронтенд-разработчик.
        </h1>
        <div className="header__text">
          <p>со страстью к обучению и творчеству.</p>
        </div>
        <a href="#!" className="btn">Скачать резюме</a>
      </div>
    </header>
  );
}

export default Header;