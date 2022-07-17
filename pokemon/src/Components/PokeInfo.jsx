import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import { getPokemonDetail } from "../queries/query";
import { Loading } from "./Loading";
// import "./helper.css";

export const PokeInfo = ({ props }) => {
  const { loading, error, data } = useQuery(getPokemonDetail, {
    variables: { name: props.pokemon.name },
  });
  const [isCollected, setIsCollected] = useState(false);
  useEffect(() => {
    for (let i = 0; i < props.collection.length; i++) {
      if (props.collection[i].name === props.pokemon.name) {
        setIsCollected(true);
      }
    }
  }, [props.collection]);
  // console.log(data);
  // console.log(isCollected);
  return (
    <>
      {data ? (
        <>
          <h1 className="text-center text-slate-700 text-4xl my-6">PokeINFO</h1>
          <div className="container">
            <div className="flex flex-wrap justify-center">
              <div className="w-96 h-96 m-12 p-4">
                <div className="h-48 flex">
                  <img className="h-36 my-auto" src={props.pokemon.image} />
                  <div className="h-36 my-auto ml-2">
                    <h1 className="mt-4">{data.pokemon.name}</h1>
                    {data.pokemon.types.map((e,i) => {
                      return (
                        <button key={i} className="mt-2 border-slate-400 rounded-md bg-zinc-300 px-2">
                          {e.type.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="h-36 flex ">
                  <div className="w-6/12 p-2">
                    <p>Abilities</p>
                    <ul>
                      {data.pokemon.abilities.map((e,i) => {
                        return <li className="ml-2" key={i}>{e.ability.name}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="w-6/12 p-2">
                    {isCollected ? (
                      <button
                        onClick={() => {
                          props.addCollection(
                            props.pokemon.name,
                            props.pokemon.image
                          );
                        }}
                        className="w-32 h-16 border-4 p-1 bg-red-500 rounded-lg hover:bg-green-400 hover:border-yellow-300"
                      >
                        Already Collected
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          props.addCollection(
                            props.pokemon.name,
                            props.pokemon.image
                          );
                        }}
                        className="w-32 h-16 border-4 p-1 bg-cyan-400 rounded-lg hover:bg-green-400 hover:border-yellow-300"
                      >
                        Add to Collection
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-96 h-96 m-12 p-4">
                <div className="h-80 overflow-y-auto">
                  <p>
                    Total Moves: <span> {data.pokemon.moves.length}</span>
                  </p>
                  <ul className="flex flex-wrap justify-around">
                    {data.pokemon.moves.map((e,i) => {
                      return (
                        <li key={i} className="hover:bg-slate-500 hover:text-slate-50 w-36">
                          {e.move.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
