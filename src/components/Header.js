import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link>Favourites</Link>
          </li>
          <li>
            <Link>New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
