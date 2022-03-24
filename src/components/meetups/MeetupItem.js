import classes from "./MeetupItem.module.css";
import { FavouritesContext } from "../../store/favourites-context";
import Card from '../ui/Card';
import { useContext } from 'react';

function MeetupItem({ image, title, address, description, id }) {
  
  const favouritesObject = useContext(FavouritesContext);

  const itemIsFavourite = favouritesObject.itemIsFavourite(id);

  function handleFavouriteMeet() {
    if (itemIsFavourite) {
      favouritesObject.removeFavourite(id)
    } else {
      favouritesObject.addFavourite({
        id,
        title,
        image,
        address,
        description
      })
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleFavouriteMeet}>{itemIsFavourite ? "remove from favourites" :  "Add to favourites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
