import './style.css';

function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Контакты</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Место нахождения</h2>
            <p>г. Тамбов.</p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">WhatsApp</h2>
            <p><a href="tel:+79156794970">+7 (915) 679-49-70</a></p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p><a href="mailto:Email">arestov.maks@mail.ru</a></p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contacts;