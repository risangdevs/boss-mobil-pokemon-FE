export const Nav = ({props}) => {
  return (
    <div className="p-2 h-20 bg-red-500">
      <ul className="flex list-none justify-center">
        <li className="text-slate-100 mx-6 my-auto hover:scale-125">
          <a className="hover:cursor-pointer" onClick={()=>props.back()}>List</a>
        </li>
        <a className="hover:cursor-pointer" onClick={()=>props.back()}>
          <img
            className="h-16 hover:bg-neutral-200 rounded-full"
            src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png"
          />
        </a>
        <li className="text-slate-100 mx-6 my-auto hover:scale-125">
          <a className="hover:cursor-pointer" onClick={()=>props.collection()}>Collection</a>
        </li>
      </ul>
    </div>
  );
};
