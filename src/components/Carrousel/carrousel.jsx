import { useState } from 'react';
import left from '../../assets/vector-left.svg';
import right from '../../assets/vector-right.svg';

export function Carrousel({ frames }) {
  //Création de l'état initial
  const [current, setCurrent] = useState(0);
  const length = frames.length;

  const nextFrame = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevFrame = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    //Ajout des flêches de navigation, et navigation vers les images suivantes
    <section id="carrousel-container">
      {length > 1 && (
        <img
          src={left}
          alt="gauche"
          onClick={prevFrame}
          className="leftArrow"
        />
      )}
      {length > 1 && (
        <img
          src={right}
          alt="droite"
          onClick={nextFrame}
          className="rightArrow"
        />
      )}
      {frames.map((frame, index) => (
        <div
          key={index}
          className={current === index ? 'slider active-anim' : 'slider'}
        >
          {index === current && <img src={frame} alt="appartement" />}
          {index === current && (
            <span className="slider__number">
              {current + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </section>
  );
}
