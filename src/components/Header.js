import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>React Meetups</div>
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
