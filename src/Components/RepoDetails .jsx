import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useHistory } from "react-router-dom";

const RepoDeatils = () => {
  const selectedRepo = localStorage.getItem("selectedRepo");
  const parsedValue = JSON.parse(selectedRepo || "");
  const {
    name,
    visibility,
    html_url,
    created_at,
    default_branch,
    owner: { login, avatar_url },
  } = parsedValue || {};
  const history = useHistory();
  const createdAt = Date(created_at)?.split("G")[0];
  const handleOnClick = () => {
     history.push("/")
  }

  return (
    <div className="w-full flex justify-center h-5/6">
      <Card className="w-96 rounded shadow-2xl  flex-col items-center justify-center">
        <CardBody className="rounded flex flex-col gap-2 flex-wrap justify-center items-center">
          <CardHeader className="w-96">
            <img
              src={avatar_url}
              className="rounded mx-auto"
              alt=""
              width="250"
            />
          </CardHeader>

          <Typography variant="h4" color="blue-gray">
            {login}
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography color="blue-gray" className="font-medium" textGradient>
              Project Name : {name}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CreatedAt : {createdAt}
            </Typography>
            <Typography className="font-medium" textGradient>
              Visibility : {visibility}
            
            </Typography>
            <Typography className="font-medium" textGradient>
              Language : {parsedValue.language}
            </Typography>
            <Typography className="font-medium" textGradient>
              default_branch : {default_branch}
            </Typography>
            <Typography
              color="blue"
              className="font-medium cursor-pointer hover:text-blue-500 hover:transition"
              textGradient>
              <a target="_blank" href={html_url}>
                Know More About this project 
              </a>
            </Typography>
            <Typography
              color="blue"
              className="font-medium cursor-pointer hover:text-blue-500 pb-2 hover:transition"
              textGradient>
              <a
                target="_blank"
                href={`https://github.com/${login}?tab=repositories`}>
                View More Repos of {login}
              </a>
            </Typography>
            <Button variant="outlined" onClick={handleOnClick} className="bg-black text-white w-32 p-2 hover:bg-gray-800 hover:transition mx-auto">Back To Home</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default RepoDeatils;
