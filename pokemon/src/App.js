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
  const [collection, setCollection] = useState("");
  const [isCollectionPage, setIsCollectionPage] = useState(false);
  const { loading, error, data } = useQuery(getPokemonList, {
    variables: { limit: 20, offset: offset },
  });
  const clickPokemon = (name, image) => {
    setPokemon({ name: name, image: image });
    setIsCollectionPage(false);
  };
  const toList = () => {
    setPokemon("");
    setIsCollectionPage(false);
  };
  const toCollection = () => {
    setIsCollectionPage(true);
    setPokemon("");
  };
  const addCollection = (name, image) => {
    setCollection([...collection, { name: name, image: image }]);
  };
  console.log(localStorage.pokemon);
  console.log(collection);
  useEffect(() => {
    if (collection) {
      localStorage.setItem("pokemon", JSON.stringify(collection));
    }
  }, [collection]);
  // console.log(collection);
  useEffect(() => {
    if (localStorage.pokemon) {
      // console.log(localStorage.pokemon);
      setCollection(JSON.parse(localStorage.pokemon));
    }
  }, []);
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
  // console.log(pokemon);
  return (
    <div className="App bg-slate-100 min-h-screen">
      <Nav props={{ back: toList, collection: toCollection }} />
      {!pokemon && !isCollectionPage && (
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
      {pokemon && !isCollectionPage && (
        <PokeInfo
          props={{
            pokemon: pokemon,
            addCollection: addCollection,
            collection: collection,
          }}
        />
      )}
      {isCollectionPage && !pokemon && (
        <>
          {collection ? (
            <PokeCard
              props={{
                data: collection,
                click: clickPokemon,
              }}
            />
          ) : (
            <div className="text-center text-5xl w-screen max-h-screen">
              <h1 className="my-36">You Do Not Have any Collection.</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
