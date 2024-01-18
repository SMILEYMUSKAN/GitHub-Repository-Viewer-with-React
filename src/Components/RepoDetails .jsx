import { useParams } from "react-router-dom";
import { getData } from "../utils";
import { useState } from "react";

// Shows detailed information for a selected repository.
const RepoDeatils = () => {
    const [apiData, setApiData] = useState();
    const { username } = useParams();
     getData(username).then(res =>setApiData(res))
     
    return <div>
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
    </div>
}


export default RepoDeatils;