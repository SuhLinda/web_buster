import { Link } from 'react-router-dom';
import Info from '../Info/Info.jsx';

import headerLogo from '../../images/header__logo.png';
import headerPhone from '../../images/header__phone.png';

function Header() {
  return (
    <header className="header">
      <div className="header__mask">
        <nav className="header__links">
          <Link to='/startpage'>
            <img
              className="header__logo"
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
            to="/FAQ"
            className="header__link"
          >
            FAQ
          </ Link>
          <Link
            to="/contacts"
            className="header__link"
          >
            Контакты
          </ Link>
          <img
            className="header__phone"
            src={headerPhone}
            alt="phone"
          />
          <p className="header__number">
            +7 (812)
            <span className="header__span">
          313-58-45
        </span>
          </p>
        </nav>
        <Info />
      </div>
    </header>
  )
}

export default Header;
