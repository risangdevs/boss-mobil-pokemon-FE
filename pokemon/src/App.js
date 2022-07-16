import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { getPokemonList } from "./queries/query";
import { Nav } from "./Components/Nav";
import { PokeCard } from "./Components/PokeCard";
import { Pagination } from "./Components/Pagination";
import { useEffect, useState } from "react";
import { Loading } from "./Components/Loading";
import { PokeInfo } from "./Components/PokeInfo";

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(1);
  const [pokemon, setPokemon] = useState("");
  const { loading, error, data } = useQuery(getPokemonList, {
    variables: { limit: 20, offset: offset },
  });
  const clickPokemon = (name, image) => {
    setPokemon({ name: name, image: image });
  };
  useEffect(() => {
    setOffset((page - 1) * 20 + 1);
  }, [page, limit]);
  const next = () => setPage(page + 1);
  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  // console.log(page);
  // console.log(data);
  console.log(pokemon);
  return (
    <div className="App bg-slate-100 min-h-screen">
      <Nav />
      {!pokemon && (
        <>
          {data ? (
            <>
              <PokeCard
                props={{
                  data: data.pokemons.results,
                  click: clickPokemon,
                }}
              />
              <Pagination
                props={{
                  total: data.pokemons.count,
                  showedFirst: offset,
                  showedLast: data.pokemons.results.length + offset - 1,
                  page: page,
                  next: next,
                  prev: prev,
                }}
              />
            </>
          ) : (
            <Loading />
          )}
        </>
      )}
      {pokemon && <PokeInfo props={{ pokemon: pokemon }} />}
    </div>
  );
}

export default App;
