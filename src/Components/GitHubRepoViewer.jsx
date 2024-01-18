import React from "react";
import RepoList from "./RepoList";
import SearchForm from "./SearchForm ";


//The main component that orchestrates the fetching of data and renders sub-components.
const GithubRepoViewer = () => {

    return <div className="flex flex-col gap-6 h-full items-center justify-center">
        <SearchForm />
    </div>
}

export default React.memo(GithubRepoViewer);