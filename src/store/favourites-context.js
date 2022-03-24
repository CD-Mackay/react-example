import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import { createContext, useState } from 'react';

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0
});

function FavouritesContextProvider(props) {

  const [favourited, setFavourited] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    setFavourited((prevFavourited) => {
      return prevFavourited.concat(favouriteMeetup)
    });
  };

  function removeFavouriteHandler(meetupId) {
    setFavourited(prevFavourited => {
      return prevFavourited.filter((element) => element.id !== meetupId)
    })
  };

  function isFavouriteHandler() {};

  const context = {
    favourites: favourited,
    totalFavourites: favourited.length
  }

  return <FavouritesContext.Provider value={context}>
    {props.children}
  </FavouritesContext.Provider>
};

export default FavouritesContextProvider;

