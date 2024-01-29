import reviewsContainerArrow from '../../images/reviews__container__arrow.png';
import reviewsContainerArrowTwo from '../../images/reviews__container__arrow2.png';

function Reviews() {
  return (
    <section className="reviews">
      <h2 className="reviews__title">
        Ответы на самые популярные вопросы в сфере
      </h2>
      <div className="reviews__containers">
        <p className="reviews__containers_text">
          Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.
        </p>
        <button className="reviews__containers__btn">
          <img
            src={reviewsContainerArrow}
            alt="arrow"
          />
        </button>
      </div>
      <div className="reviews__container">
        <p className="reviews__container_text">
          Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.
        </p>
        <button className="reviews__container__btn">
          <img
            src={reviewsContainerArrowTwo}
            alt="arrow"
          />
        </button>
      </div>
      <div className="reviews__review">
        <p className="reviews__review__text">
          Like the phrase “stem cell” itself, “stem cell therapy” is often used to describe a variety of different medical
          therapies that utilize stem cells in some form to treat a patient. Sometimes the term is used incorrectly to refer
          to platelet rich plasma (PRP) injections. The term is also used to refer to stem cell transplants, also known as
          bone marrow transplants.
        </p>
        <p className="reviews__review__text">
          Most commonly “stem cell therapy” is used to describe a procedure where the patient’s adult stem cells and other
          potentially regenerative cells are harvested from a tissue sample of either fat or bone marrow taken from the
          patient. These concentrated regenerative cells are then used to treat specific injuries typically by injecting them
          into the afflicted area. It should be said that this type of stem cell therapy is currently not FDA approved and
          clinics performing it illegally in the US or in other countries perform various versions of the procedure to treat
          illnesses and injuries with little to no clinical evidence.
        </p>
        <p className="reviews__review__text">
          At InGeneron we use the term “regenerative cell therapy” since there are many different cell types and regenerative
          properties collected and used by our therapy along with adult stem cells. Importantly we do not treat patients
          outside of our approved clinical trials and we are dedicated to securing FDA approval through rigorous clinical
          testing.
        </p>
      </div>
      <div className="reviews__containers">
        <p className="reviews__containers_text">
          Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.
        </p>
        <button className="reviews__containers__btn">
          <img
            src={reviewsContainerArrow}
            alt="arrow"
          />
        </button>
      </div>
      <div className="reviews__containers">
        <p className="reviews__containers_text">
          Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.
        </p>
        <button className="reviews__containers__btn">
          <img
            src={reviewsContainerArrow}
            alt="arrow"
          />
        </button>
      </div>
      <div className="reviews__containers">
        <p className="reviews__containers_text">
          Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.
        </p>
        <button className="reviews__containers__btn">
          <img
            src={reviewsContainerArrow}
            alt="arrow"
          />
        </button>
      </div>
    </section>
  )
}

export default Reviews;
