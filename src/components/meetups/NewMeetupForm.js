import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm() {
  return(
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">TItle</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  ) 
};

export default NewMeetupForm;