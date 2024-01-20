import "../App.css";
import { useState } from "react";
import RepoList from "./RepoList";
import { getData } from "../utils";
import Loading from "./LoadingSpinner";
import LogoAndContent from "./LogoAndContent";


const SearchForm = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username) {
      try {
        setLoading(true);
        const apiData = await getData(username);
        setData(apiData);
        setLoading(false);
        setUsername("");
      } catch (error) {
        setLoading(true);
      }
    }
  };
  const handleOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setUsername(value);
  };

  return (
    <div className="w-full h-full mt-6 flex gap-4 flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center justify-center gap-2">
        <div className="w-2/4 bg-white rounded-full flex items-center justify-center border">
          <input
            className="flex-1 p-2 pl-12 rounded-full input-reset"
            type="text"
            placeholder="Enter github username to view repos......"
            value={username}
            onChange={handleOnChange}
          />
          <button
            className="w-16 rounded-full p-2 hover:bg-gray-200 hover:transition"
            type="submit">
            <i className="bx bx-search-alt text-2xl"></i>
          </button>
        </div>
        {process.env.REACT_APP_KEY}Muskn
      </form>
      {loading ? <Loading /> : <RepoList data={data} />}
      {data === null && loading === false? <LogoAndContent /> : null}
    </div>
  );
};

export default SearchForm;
