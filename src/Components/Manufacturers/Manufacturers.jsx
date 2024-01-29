import manufacturersAier from '../../images/manufacturers__aier.png';
import manufacturersForyard from '../../images/manufacturers__foryard.png';
import manufacturersFujicon from '../../images/manufacturers__fujicon.png';
import manufacturersJsArtificialGrass from '../../images/manufacturers__js-artificial-grass.png';
import manufacturersMarquis from '../../images/manufacturers__marquis.png';

function Manufacturers() {
  return (
    <section className="manufacturers">
      <div className="manufacturers__mask"></div>
      <div className="manufacturers__container">
        <h2 className="manufacturers__title">
          Наши производители
        </h2>
        <div className="manufacturers__lists">
          <button className="manufacturers__btn-start"></button>
          <div className="manufacturers__items">
            <div className="manufacturers__card">
              <img
                className="manufacturers__item"
                src={manufacturersAier}
                alt="card"
              />
            </div>
            <div className="manufacturers__card">
              <img
                className="manufacturers__item"
                src={manufacturersForyard}
                alt="card"
              />
            </div>
            <div className="manufacturers__card">
              <img
                className="manufacturers__item"
                src={manufacturersFujicon}
                alt="card"
              />
            </div>
            <div className="manufacturers__card">
              <img
                className="manufacturers__item"
                src={manufacturersJsArtificialGrass}
                alt="card"
              />
            </div>
            <div className="manufacturers__card">
              <img
                className="manufacturers__item"
                src={manufacturersMarquis}
                alt="card"
              />
            </div>
          </div>
          <button className="manufacturers__btn-end"></button>
        </div>
        <p className="manufacturers__text">
          Lorem ipsum dolor sit amet consectetur. Non eget blandit in euismod felis id quisque nunc. Non orci lacus elit
          mauris velit gravida imperdiet id. Ipsum pulvinar ac ut sociis. Sed magna gravida consequat et euismod aenean quis
          mauris. Ut etiam egestas ultrices faucibus ultrices nisl enim consequat faucibus. Nibh id leo ullamcorper eleifend.
          Id at commodo interdum et leo.
        </p>
      </div>
    </section>
  )
}

export  default Manufacturers;
