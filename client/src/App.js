import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/search";
import SearchIDPage from "./pages/search/:id";
import SavedPage from "./pages/saved";
import SavedIDPage from "./pages/saved/:id";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path={["/", "/search"]}>
          <SearchPage />
        </Route>
        <Route exact path="/search/:id">
          <SearchIDPage />
        </Route>
        <Route exact path="/saved">
          <SavedPage />
        </Route>
        <Route exact path="/saved/:id">
          <SavedIDPage />
        </Route>
        {/* <Route>
          <NoMatch />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
