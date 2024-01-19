import React from "react";
import SearchForm from "./SearchForm ";
const GithubRepoViewer = () => {
  return (
    <div className="flex flex-col gap-6 h-full items-center justify-center">
      <SearchForm />
    </div>
  );
};

export default React.memo(GithubRepoViewer);
