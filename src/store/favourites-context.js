import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {}
});

export function FavouritesContextProvider(props) {

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

  function isFavouriteHandler(meetupId) {
    return favourited.some(meetup => meetup.id === meetupId);
  };

  const context = {
    favourites: favourited,
    totalFavourites: favourited.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: isFavouriteHandler
  }

  return <FavouritesContext.Provider value={context}>
    {props.children}
  </FavouritesContext.Provider>
};


