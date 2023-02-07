import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

export function Header() {
  //Création du header avec nav dynamique grâce à NavLink
  return (
    <nav className="navContainer">
      <NavLink className="navContainer__img" to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </NavLink>
      <div>
        <NavLink activeclassname="active" className="styledLink" to="/">
          Accueil
        </NavLink>
        <NavLink activeclassname="active" className="styledLink" to="/about">
          A propos
        </NavLink>
      </div>
    </nav>
  );
}
