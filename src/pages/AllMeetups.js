import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";


function AllMeetups() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://nextreactlesson-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoading(false);
        setMeetups(meetups);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>...loading</p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>All Meetups</h1>
        <ul>
          <MeetupList meetups={meetups} />
        </ul>
      </section>
    );
  }
}

export default AllMeetups;
