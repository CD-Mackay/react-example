import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/Layout";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
