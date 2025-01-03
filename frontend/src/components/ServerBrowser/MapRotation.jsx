const MapRotation = ({ maps }) => (
    <div className="font-semibold">
      <h2 className="my-4">MAP ROTATION</h2>
      <div className="flex flex-wrap pr-20 gap-4 ">
        {maps.map((map, i) => (
          <div key={i} className="relative bg-transparent transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-black">
            <img src={map.image} alt={map.name} className="bg-auto max-w-64" />
            <div className=" bottom-0 left-0 right-0 p-2 ">
              <div className="text-sm text-wrap">{map.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default MapRotation;