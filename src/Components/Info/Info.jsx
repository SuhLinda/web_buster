import formLock from '../../images/header__lock.png';

function Info() {
  return (
    <section className="info">
      <div className="info__container">
        <h2 className="info__title">
          Оптовые поставки
        </h2>
        <span className="info__title-span">
            электронных компонентов
          </span>
        <h2 className="info__title-text">
          ИЗ КИТАЯ день в день
        </h2>
        <p className="info__subtitle">
          Комплексные поставки электронных компонентов и оборудования.
          Подберем аналоги популярных брендов из Европы в условиях санкций.
        </p>
        <div className="info__table">
          <div className="info__mask"></div>
          <ul className="info__list">
            <li className="info__item">
              <span className="info__check"></span>
              <span className="info__check-text">
                Отсрочка платежей для постоянных клиентов
              </span>
            </li>
              <li className="info__item">
                <span className="info__check"></span>
                <span className="info__check-text">
              Бесплатная доставка по Москве и СПБ в течение 2х часов
            </span>
              </li>
              <li className="info__item">
                <span className="info__check"></span>
                <span className="info__check-text">
                  Квалифицированный персональный менеджер
                </span>
              </li>
            </ul>
          </div>
        </div>
        <form className="info__form">
          <h2 className="info__form-title">
            ЗАКАЖИТЕ ОБРАТНЫЙ ЗВОНОК
          </h2>
          <fieldset className="info__form-fieldset">
            <label className="info__form-label">
              Ваше имя*
            </label>
            <input
              className="info__form-input"
              name="name"
              minLength="8"
              placeholder="Петров Петр"
              required
            />
            <label className="info__form-label">
              Ваш номер*
            </label>
            <input
              className="info__form-input"
              name="phone"
              minLength="11"
              placeholder="+7 (_ _ _) _ _ _-_ _-_ _"
              required
            />
            <button
              className="info__form-btn"
              type="submit"
              aria-label="submit__phone"
            >
              Заказать звонок
            </button>
            <div className="info__form-container">
              <img
                className="info__form-img"
                src={formLock}
                alt="img"
              />
              <label className="info__form-text">
                Мы гарантируем конфиденциальность данных
              </label>
            </div>
          </fieldset>
        </form>
      </section>
  )
}

export default Info;
