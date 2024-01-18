// Contains the input field for entering a GitHub username and triggers the search.
import '../App.css'
import { useState } from "react";
import RepoList from "./RepoList";
import { getData } from "../utils";

const SearchForm =  () => {
    const [username, setUsername] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const apiData = await getData(username);
        setData(apiData)
    }
    const handleOnChange = (event) => {
      const { target:{ value } } = event;
      setUsername(value);
    }


    return<div className="w-full mt-6 flex gap-4 flex-col items-center justify-center">
     <form onSubmit={handleSubmit} className="w-full flex items-center justify-center gap-2">
        <div className="w-2/4 bg-white rounded-full flex items-center justify-center border">
            <input className="flex-1 p-2 pl-12 rounded-full input-reset" type="text" placeholder="Enter github username to view repos......" value={username} onChange={handleOnChange}/>
            <button className= "w-16 rounded-full p-2 hover:bg-gray-200 hover:transition" type="submit"><i className='bx bx-search-alt text-2xl'></i></button>
        </div>
    </form>
    <RepoList data={data}/>
    </div>
}


export default SearchForm;