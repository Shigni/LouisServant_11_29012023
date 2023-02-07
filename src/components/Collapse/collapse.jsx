import { useState, useRef, useEffect } from 'react';
import Chevron from '../../assets/vectorBas.svg';

export function Collapse(props) {
  //Création de l'état initial
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState();
  const toggleState = () => {
    setToggle(!toggle);
  };
  //Scroll de la page pour l'affichage
  const refHeight = useRef();
  useEffect(() => {
    setHeight(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    //Affichage des éléments
    <div className={`collapse ${props.aboutStyle}`}>
      <div onClick={toggleState} className="collapse__visible">
        <h2>{props.aboutTitle}</h2>
        <img
          className={toggle ? 'chevron rotated' : 'chevron'}
          src={Chevron}
          alt="chevron"
        />
      </div>
      <div
        ref={refHeight}
        className={toggle ? 'collapse__toggle animated' : 'collapse__toggle'}
        style={{ height: toggle ? `${height}` : '0px' }}
      >
        <p aria-hidden={toggle ? 'true' : 'false'}>{props.aboutText}</p>
      </div>
    </div>
  );
}
