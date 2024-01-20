import { useHistory } from "react-router-dom";

const RepoList = ({ data }) => {
  const history = useHistory();

  const handleOnClick = (repo) => {
    localStorage.setItem("selectedRepo", JSON.stringify(repo));
    history.push(`/github/${repo?.full_name}`);
  };
  if (data?.length === 0) {
    return (
      <div className="flex justify-center mt-6 items-center flex-col">
        <section className="flex justify-center items-center">
          <p className="text-2xl">User Not Found, Search Again</p>
        </section>
        <img
          src="https://img.freepik.com/premium-vector/search-result-find-illustration_585024-17.jpg"
          alt="gif"
          width="400"
        />
      </div>
    );
  }

  return (
    <div className="w-2/4">
      {data?.map((userInfo) => (
        <div key={userInfo.id} className="flex mb-2 border-b gap-4 p-4">
          <img
            src={userInfo?.owner?.avatar_url}
            alt="user-avtar"
            width="60"
            className="rounded-full"
          />
          <div className="flex flex-col gap-2">
            <h1 className="underline font-semibold">
              {userInfo?.owner?.login}
            </h1>
            <h2
              className="text-2xl cursor-pointer hover:text-blue-800"
              onClick={() => handleOnClick(userInfo)}>
              {userInfo?.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
