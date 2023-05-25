import {
  faSquareXmark,
  faMapLocationDot,
  faPlane,
  faMapMarkedAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AttractionInfo({
  attractionInfoShown,
  attraction,
  attractions,
  setAttractionInfoShown,
  setDisplay,
}) {
  // const [isFavorite, setIsFavorite] = useState(false);

  // const handleFavorite = () => {
  //   setIsFavorite(!isFavorite);
  // };
  console.log(attraction);

  const handleClose = () => {
    setAttractionInfoShown(false);
  };

  const handleAdd = () => {
    setDisplay("visible");
    setAttractionInfoShown(false);
  };

  const currentAttraction = attractions.find((a) => a.name === attraction.name);

  return (
    <div
      className={`attraction-info ${
        attractionInfoShown ? "show" : ""
      } w-2/5 h-2/3 rounded-t-lg shadow-md flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-black`}
      style={{ backdropFilter: "none" }}
    >
      {/* Container for attraction name and exit button */}
      <div className="flex rounded-t-lg justify-between items-center p-1 bg-tertiary">
        <div></div>
        <h2
          className="text-lg font-semibold text-center overflow-hidden"
          style={{
            fontSize:
              currentAttraction && currentAttraction.name.length > 20
                ? `${28 - (currentAttraction.name.length - 20)}px`
                : "28px",
          }}
        >
          {currentAttraction ? currentAttraction.name : ""}
        </h2>
        <button onClick={handleClose}>
          <FontAwesomeIcon icon={faSquareXmark} size="xl" color="PapayaWhip" />
        </button>
      </div>
      {/* Container for attraction image */}
      <div className="flex justify-center items-center flex-1">
        {currentAttraction &&
          currentAttraction.photo &&
          currentAttraction.photo.images &&
          currentAttraction.photo.images.large && (
            <div className="relative w-full h-full">
              <img
                src={currentAttraction.photo.images.large.url}
                className="absolute inset-0 w-full h-full object-cover"
                alt={currentAttraction.name}
              />
            </div>
          )}
        {!currentAttraction ||
          !currentAttraction.photo ||
          !currentAttraction.photo.images ||
          (!currentAttraction.photo.images.large && (
            <div className="flex justify-center items-center w-full h-full">
              <FontAwesomeIcon icon={faMapMarkedAlt} size="5x" color="#ccc" />
            </div>
          ))}
      </div>
      {/* Container for attraction data */}
      {currentAttraction && (
        <div className="flex flex-col justify-end overflow-y-auto px-4 bg-[#bdb09a] rounded-b-lg">
          <div className="mb-2">
            <span className="font-semibold text-sm">Address:</span>{" "}
            <span className="text-sm">
              {currentAttraction.address
                ? currentAttraction.address
                : "No address available"}
            </span>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-sm">City:</span>{" "}
            <span className="text-sm">
              {currentAttraction.ranking_geo
                ? currentAttraction.ranking_geo
                : "No city available"}
            </span>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-sm">Rating:</span>{" "}
            <span className="text-sm">
              {currentAttraction.rating
                ? currentAttraction.rating
                : "No rating available"}
            </span>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-sm">Description:</span>
          </div>
          <div className="mb-1 overflow-auto bg-slate-300 px-1 scale-95" style={{ maxHeight: "20vh" }}>
            <span className="text-xs whitespace-pre-wrap">
              {currentAttraction.description
                ? currentAttraction.description
                : "No description available"}
            </span>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-sm">Ranking:</span>{" "}
            <span className="text-sm">
              {currentAttraction.ranking
                ? currentAttraction.ranking
                : "No ranking available"}
            </span>
          </div>
          <div className="flex justify-between items-center mt-2 mb-2 px-5">
            {currentAttraction.address && (
              <button
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${currentAttraction.address}`,
                    "_blank"
                  )
                }
                className="bg-white text-green rounded-lg p-1"
              >
                <FontAwesomeIcon icon={faMapLocationDot} />
              </button>
            )}
            {currentAttraction.web_url && (
              <button
                onClick={() => window.open(currentAttraction.web_url, "_blank")}
                className="bg-white text-black rounded-lg p-1"
              >
                <FontAwesomeIcon icon={faPlane} />
              </button>
            )}
            <button className="bg-white text-black rounded-lg p-1">
              <FontAwesomeIcon icon={faPlus} onClick={handleAdd} />
            </button>
            {/* <button
              className={`bg-white text-secondary rounded-full p-2 ${
                isFavorite ? "bg-yellow-500" : ""
              }`}
              onClick={handleFavorite}
            >
              <FontAwesomeIcon icon={faStar} />
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
