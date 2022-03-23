import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/newmeetup" exact>
          <NewMeetups />
        </Route>
        <Route path="/favourites" exact>
          <Favourites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
