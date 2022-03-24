import { useContext } from 'react';

import { FavouritesContext } from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

function Favourites() {
  const favouritesCtx = useContext(FavouritesContext);

  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>you ain't got no favourites yet!</p>
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  )
};

export default Favourites;