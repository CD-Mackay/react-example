import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  function displayMeetups(array) {
    return array.map((element) => {
      return (
        <MeetupItem
          key={element.id}
          image={element.image}
          title={element.title}
          address={element.address}
          description={element.description}
        />
      );
    });
  }
  return <ul className={classes.list}>
    {displayMeetups(props.meetups)}
  </ul>;
}

export default MeetupList;
