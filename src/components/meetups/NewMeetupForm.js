import { useRef } from 'react'; 

import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm(props) {
 const titleInputRef = useRef();
 const imageInputRef = useRef();
 const addressInputRef = useRef();
 const descriptionInputRef = useRef();

  function handleFormSubmit(event) {
    event.preventDefault();
    const meetupData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value
    }
    props.onAddMeetup(meetupData);
  };


  return(
    <Card>
      <form className={classes.form} onSubmit={(event) => handleFormSubmit(event)}>
        <div className={classes.control}>
          <label htmlFor="title">TItle</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  ) 
};

export default NewMeetupForm;