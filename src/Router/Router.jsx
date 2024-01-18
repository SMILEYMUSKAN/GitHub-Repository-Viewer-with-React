import { Route, Switch } from "react-router-dom"
import RepoDeatils from "../Components/RepoDetails ";
import GitHubRepoViewer from "../Components/GitHubRepoViewer";

const AppRouter = () => {
    
    return <div>
        <Switch>
            <Route exact path="/" component={GitHubRepoViewer}/>
            <Route exact path="/about" component={() => <h1>Welcome To About Page</h1>}/>
            <Route path="/repoDetails/:username" component={RepoDeatils}/>
        </Switch>
    </div>
}

export default AppRouter;