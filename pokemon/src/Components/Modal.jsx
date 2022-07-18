import { useState } from "react";

export const Modal = ({ props }) => {
  const [nickname, setNickname] = useState(props.nick);
  const add = () => {
    props.reset();
    props.addCollection(props.name, props.image, nickname);
  };
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <>
      {props.isCatched === "yes" && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-red-500">
            <div className="flex-row">
              <h1 className="text-center text-yellow-50 m-2">
                Congrats You have caught a Pokemon!
              </h1>
              <label className="text-yellow-50 m-1">Nickname :</label>
              <input
                onChange={handleNickname}
                defaultValue={props.nick}
                className="m-1 p-1"
                type="text"
              />
              <button
                onClick={add}
                className="border-2 w-8 rounded-md mx-1 text-yellow-50 hover:bg-yellow-200 hover:text-slate-800"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      {props.isCatched === "no" && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-red-500">
            <div className="flex-row">
              <h1 className="text-center text-yellow-50 m-2">
                Failed to catch Pokemon
              </h1>
              <h2 className="text-center text-yellow-50 m-2">
                Please try again
              </h2>
              <button
                onClick={props.reset}
                className="border-2 w-8 rounded-md mx-auto text-yellow-50 hover:bg-yellow-200 hover:text-slate-800"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
