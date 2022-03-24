import { Link } from "react-router-dom";
import { useContext } from 'react';

import classes from './Header.module.css';
import { FavouritesContext } from "../store/favourites-context";

function Header() {

  const favouriteCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites
              <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
              </Link>
          </li>
          <li>
            <Link to="/newmeetup">New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
