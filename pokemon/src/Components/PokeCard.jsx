export const PokeCard = ({ props }) => {
  // console.log(props);
  return (
    <div className="flex justify-center m-8 flex-wrap">
      {props.data.map((e) => (
        <div
          className="w-auto m-8 hover:scale-150 hover:cursor-pointer"
          key={e.name}
          onClick={() => props.click(e.name, e.image)}
        >
          <div className="space-y-4">
            <div className="aspect-w-3 aspect-h-2">
              <img
                className="object-cover shadow-lg rounded-lg"
                src={e.image}
                alt=""
              />
            </div>
            <div className="space-y-2">
              <div className="text-lg leading-6 font-medium space-y-1 text-center">
                <h3>{e.name}</h3>
              </div>
            </div>
            {props.page === "collection" && e.nickname !== e.nick && (
              <div className="space-y-2">
                <div className="text-md leading-6 font-medium space-y-1 text-center text-slate-700">
                  <h3>{e.nickname}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
