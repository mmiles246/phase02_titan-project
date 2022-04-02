import React from 'react'

function ScoutCard({eldian}) {
  return (
    <li className="cards__item">
      <div className="card">
        <img
          
          src={eldian.img}
          alt={eldian.name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{eldian.name}</div>
          <p className="card__text" id='scout-card-text'>"{eldian.quotes}"</p>
          <div className="card__detail">
            <p>{eldian.regiment}</p>
          </div>

              

        </div>
      </div>
    </li>
  );
}

export default ScoutCard