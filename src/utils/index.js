

export const getData = async (username) => {
  if (username) {
    const responce = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await responce.json();

    return data;
  }
};

export const fetchData = async (url) => {
  const responce = await fetch(url);
  return responce;
};
