import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

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

  const createdAt = Date(created_at)?.split("G")[0];

  return (
    <div className="w-full flex justify-center mt-2 h-full">
      <Card className="w-96 rounded shadow-2xl  flex-col items-center justify-center">
        <CardBody className="rounded flex flex-col gap-2 flex-wrap justify-center items-center">
          <CardHeader className="w-96">
            <img
              src={avatar_url}
              className="rounded mx-auto"
              alt=""
              width="300"
            />
          </CardHeader>

          <Typography variant="h4" color="blue-gray" className="mb-2">
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
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default RepoDeatils;
