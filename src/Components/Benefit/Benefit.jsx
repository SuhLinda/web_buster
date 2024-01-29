import benefitHighQualityProducts from '../../images/benefit__high-quality products.png';
import benefitIndividualApproach from '../../images/benefit__individual-approach.png';
import benefitFreeShipping from '../../images/benefit__free-shipping.png';
import benefitWeSelectAnalogues from '../../images/benefit__we-select-analogues.png';
import benefitReserveStockOfComponents from '../../images/benefit__reserve-stock-of-components.png';
import benefitFlexiblePaymentSystem from '../../images/benefit__flexible-payment-system.png';

function Benefit() {
  return(
    <section className="benefit">
      <h2 className="benefit__title">
        Почему с нами выгодно
      </h2>
      <h3 className="benefit__subtitle">С 1996 года мы занимаемся оптовыми поставками электронных компонентов от ведущих
        производителей из Европы и Азии для Российских потребителей.
      </h3>
      <ul className="benefit__container">
        <li className="benefit__lists">
          <div className="benefit__card">
            <img
              className="benefit__img"
              src={benefitHighQualityProducts}
              alt="benefit"
            />
            <h3 className="benefit__container-title">
              Качественная продукция
            </h3>
            <p className="benefit__container-subtitle">
              Все наши товары сертифицированы и имеют сопроводительную документацию.
            </p>
          </div>
        </li>
        <li className="benefit__lists">
          <div className="benefit__card">
            <img
              className="benefit__img"
              src={benefitIndividualApproach}
              alt="benefit"
            />
            <h3 className="benefit__container-title">
              Качественная продукция
            </h3>
            <p className="benefit__container-subtitle">
              Возможность изготовления компонентов специально для вас на заводах-изготовителя.
            </p>
          </div>
        </li>
        <li className="benefit__lists">
          <div className="benefit__card">
            <img
              className="benefit__img"
              src={benefitFreeShipping}
              alt="benefit"
            />
            <h3 className="benefit__container-title">
              Качественная продукция
            </h3>
            <p className="benefit__container-subtitle">
              При наличии товара на складе и заказе от 10 000 рублей, доставим бесплатно по Москве и СПБ в течение 2х
              часов.
            </p>
          </div>
        </li>
        <li className="benefit__lists">
          <div className="benefit__card">
            <img
              className="benefit__img"
              src={benefitWeSelectAnalogues}
              alt="benefit"
            />
            <h3 className="benefit__container-title">
              Качественная продукция
            </h3>
            <p className="benefit__container-subtitle">
              Поможем подобрать аналоги популярных европейских брендов в условиях санкций.
            </p>
          </div>
        </li>
        <li className="benefit__lists">
          <div className="benefit__card">
            <img
              className="benefit__img"
              src={benefitReserveStockOfComponents}
              alt="benefit"
            />
            <h3 className="benefit__container-title">
              Качественная продукция
            </h3>
            <p className="benefit__container-subtitle">
              Хранение товара на наших складах для постоянных клиентов.
            </p>
          </div>
        </li>
        <li className="benefit__lists">
          <div className="benefit__card">
            <img
              className="benefit__img"
              src={benefitFlexiblePaymentSystem}
              alt="benefit"
            />
            <h3 className="benefit__container-title">
              Качественная продукция
            </h3>
            <p className="benefit__container-subtitle">
              Отсрочка платежей для постоянных клиентов.
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Benefit;
