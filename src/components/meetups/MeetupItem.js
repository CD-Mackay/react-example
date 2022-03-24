function MeetupItem({image, title, address, description}) {
  return <li>
    <div>
      <img src={image} alt={title} />
    </div>
    <div>
      <h3>{title}</h3>
      <address>{address}</address>
      <p>{description}</p>
    </div>
    <div>
      <button>to favourites</button>
    </div>
  </li>
};

export default MeetupItem;