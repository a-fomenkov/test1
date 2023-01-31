import './style.css';
import Header from './../../components/header/Header';

function Home() {
  return (
    <div>
      <Header />

      <main className="section">
        <div className="container">
          <h1 className="title-1">Навыки</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, ReactJS, HTML, CSS, GitHub
              </p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>Тут покачно нет прокаченных скилов.</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Home;