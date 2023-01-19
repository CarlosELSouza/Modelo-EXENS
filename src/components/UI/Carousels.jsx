import React from 'react';
import Carousel from 'react-elastic-carousel';
import '../../styles/carousel.css';

const Carousels = ({props}) => {
  return (
  <Carousel>
    {props.map((item, index) => (<>
    <div className="master">
      <div className='card1' key={index}>
        <div className='card__title'>
          {item.name}
        </div>
        <div className="card__image">
          <img src={item.img} alt="" />
        </div>
      </div>
      <div className="card2">
        <div className="card__description">
          <div className="card__child-1">
          {item.description}
          </div>
          <div className="card__child-2">
            O ERP conta com diversos módulos e áreas de utilização
            <button>Confira ↗</button>
          </div>
          
        </div>
      </div>
    </div>
      </>
    ))}
    </Carousel>
  )
}

export default Carousels