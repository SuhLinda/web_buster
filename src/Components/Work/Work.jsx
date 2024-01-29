function Work() {
  return (
    <section className="work">
      <div className="work__mask"></div>
      <div className="work__container">
        <h2 className="work__title">
          Схема работы
        </h2>
        <p className="work__subtitle">
          Lorem ipsum dolor sit amet consectetur. Augue velit in enim sagittis imperdiet sit mauris. Vitae sit in
          fusce massa amet.
        </p>
        <div className="work__cards">
          <div className="work__application">
            <div className="work__card_mask">
              <h2 className="work__card_number">
                01
              </h2>
              <h3 className="work__card_title">
                ВЫ ОСТАВЛЯЕТЕ ЗАЯВКУ
              </h3>
              <p className="work__card_text">
                Отправить запрос вы можете любым удобным для вас способом: например, через форму на сайте. Также вы можете
                связаться с нами напрямую.
              </p>
            </div>
          </div>
          <div className="work__check">
            <div className="work__card_mask">
              <h2 className="work__card_number">
                02
              </h2>
              <h3 className="work__card_title">
                МЫ ПРОВЕРЯЕМ НАЛИЧИЕ ПОЗИЦИЙ
              </h3>
              <p className="work__card_text">
                Проверяем наличие на складе, а также актуальность производства (возможна замена, если необходимо.) Если
                требуется замена - подбираем аналоги и привозим на заказ.
              </p>
            </div>
          </div>
          <div className="work__proposal">
            <div className="work__card_mask">
              <h2 className="work__card_number">
                03
              </h2>
              <h3 className="work__card_title">
                ФОРМИРУЕМ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
              </h3>
              <p className="work__card_text">
                На данном этапе мы с вами согласуем ценовое предложение, обговариваем сроки поставки и условия оплаты.
              </p>
            </div>
          </div>
        </div>
        <div className="work__cards__two-line">
          <div className="work__product">
            <div className="work__card_mask">
              <h2 className="work__card_number">
                06
              </h2>
              <h3 className="work__card_title">
                ВЫ ПОЛУЧАЕТЕ ТОВАР
              </h3>
              <p className="work__card_text">
                Поставляем вам товар в надлежащей упаковке в сопровождении оригиналов всех необходимых документов либо вы
                забираете его самовывозом.
              </p>
            </div>
          </div>
          <div className="work__order">
            <div className="work__card_mask">
              <h2 className="work__card_number__two-line">
                05
              </h2>
              <h3 className="work__card_title__two-line">
                МЫ ВЫПОЛНЯЕМ ЗАКАЗ
              </h3>
              <p className="work__card_text__two-line">
                Товар поступает на склад в Москву или Санкт-Петербург, где мы сверяем правильность поставки и начинаем сборку.
              </p>
            </div>
          </div>
          <div className="work__payment">
            <div className="work__card_mask">
              <h2 className="work__card_number__two-line">
                04
              </h2>
              <h3 className="work__card_title__two-line">
                ПРОВОДИМ ОПЛАТУ
              </h3>
              <p className="work__card_text__two-line">
                Далее, после получения авансового платежа, мы размещаем заказ.
              </p>
            </div>
          </div>
        </div>
        <button className="work__btn">
          ОСТАВИТЬ ЗАЯВКУ
        </button>
      </div>
    </section>
  )
}

export default Work;
