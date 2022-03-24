import { Link } from "react-router-dom";

import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
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
