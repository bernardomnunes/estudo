import { useState, useEffect } from "react";

interface Repo {
  name: string;
  description: string;
}

interface AppProps {
  list: number[];
}

function App({ list }: AppProps) {
  const [repos, setRepos] = useState<Repo[]>([]);
  // const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState("");

  console.log("render");

  useEffect(() => {
    fetch("https://api.github.com/users/diego3g/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setRepos(data);
      });
  }, []);

  const filteredRepos =
    search.length > 0 ? repos.filter((repo) => repo.name.includes(search)) : [];

  const listProp = list.length > 0 ? list.filter((list) => list === 2) : [];
  console.log(listProp);

  // useEffect(() => {
  //   setFilteredRepos(repos.filter((repo) => repo.name.includes(search)));
  // }, [search]);

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Buscar..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      {search.length > 0 ? (
        <ul>
          {filteredRepos.map((repo) => {
            return <li key={repo.name}>{repo.name}</li>;
          })}
        </ul>
      ) : (
        <ul>
          {repos.map((repo) => {
            return <li key={repo.name}>{repo.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
