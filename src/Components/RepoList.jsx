//Displays a list of repositories with basic information.

import { useState } from "react";
import  {GetData}  from "../utils";
import { Link } from "react-router-dom";


const RepoList = ({ data }) => {
  
    return <div className="w-2/4">
        
        {data.map((userInfo) => <div key={userInfo.id} className="flex mb-2 border-b gap-4 p-4">
        <img src={userInfo?.owner?.avatar_url} alt="user-avtar" width="60" className="rounded-full"/>
        <div className="flex flex-col gap-2">
            <h1 className="underline font-semibold">{userInfo?.owner?.login}</h1>
           <Link to={`/repoDetails/${userInfo?.owner?.login}`}><h2 className="text-2xl hover:text-blue-800">{userInfo?.name}</h2></Link>
            </div>
        </div>)}
       
    </div>
}


export default RepoList;