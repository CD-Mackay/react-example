import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from 'react-router-dom';

function NewMeetups() {

  const history = useHistory();

  function addMeetupHandler(data) {
    fetch("https://nextreactlesson-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      history.replace('/');
    })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetups;
