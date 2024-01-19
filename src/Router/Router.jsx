import { Route, Switch } from "react-router-dom";
import RepoDeatils from "../Components/RepoDetails ";
import GitHubRepoViewer from "../Components/GitHubRepoViewer";

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={GitHubRepoViewer} />
        <Route path="/github/:username" component={RepoDeatils} />
      </Switch>
    </div>
  );
};

export default AppRouter;
