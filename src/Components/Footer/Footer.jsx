import { Link } from 'react-router-dom';

import headerLogo from '../../images/header__logo.png';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__links">
        <Link to='/startpage'>
          <img
            className="header__logo footer__logo"
            src={headerLogo}
            alt="logo"
          />
        </ Link>
        <Link
          to="/catalog"
          className="header__link"
        >
          Каталог
        </ Link>
        <Link
          to="/manufacturers"
          className="header__link"
        >
          Производители
        </ Link>
        <Link
          to="/whodoweworkfor"
          className="header__link"
        >
          Для кого мы работаем
        </ Link>
        <Link
          to="/certificates"
          className="header__link"
        >
          Сертификаты
        </ Link>
        <Link
          to="/aboutus"
          className="header__link"
        >
          О нас
        </ Link>
        <Link
          to="/contacts"
          className="header__link"
        >
          Контакты
        </ Link>
        <button className="footer__btn">
          ОСТАВИТЬ ЗАЯВКУ
        </button>
      </nav>
    </footer>
  )
}

export default Footer;
