import { useQuery } from "@apollo/client";
import { getPokemonDetail } from "../queries/query";
// import "./helper.css";

export const PokeInfo = ({ props }) => {
  const { loading, error, data } = useQuery(getPokemonDetail, {
    variables: { name: props.pokemon.name },
  });
  console.log(data);
  return (
    <>
      <h1 className="text-center text-slate-700 text-4xl my-6">PokeINFO</h1>
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className="w-96 h-96 m-12 p-4">
            <div className="h-48 flex">
              <img className="h-36 my-auto" src={props.pokemon.image} />
              <div className="h-36 my-auto ml-2">
                <h1 className="mt-4">{data.pokemon.name}</h1>
                {data.pokemon.types.map((e) => {
                  return (
                    <button className="mt-2 border-slate-400 rounded-md bg-zinc-300 px-2">
                      {e.type.name}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="h-36">
              <p>Abilities</p>
              <ul>
                {data.pokemon.abilities.map((e) => {
                  return <li className="ml-2">{e.ability.name}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="w-96 h-96 m-12 p-4">
            <div className="h-80 overflow-y-auto">
              <p>
                Total Moves: <span> {data.pokemon.moves.length}</span>
              </p>
              <ul className="flex flex-wrap justify-around">
                {data.pokemon.moves.map((e) => {
                  return <li className="hover:bg-slate-500 hover:text-slate-50 w-36">{e.move.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
