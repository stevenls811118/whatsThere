import { faSquareXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AttractionInfo({ attractionInfoShown, attraction, attractions, setAttractionInfoShown }) {
  const handleClose = () => {
    setAttractionInfoShown(false);
  };

  const currentAttraction = attractions.find((a) => a.name === attraction.name);

  return (
    <div className={`attraction-info ${attractionInfoShown ? 'show' : ''} bg-white p-4  rounded-md shadow-md w-[100%] h-[100%] overflow-y-auto`} style={{ backdropFilter: 'none', transform: 'scale(0.8)' }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{currentAttraction ? currentAttraction.name : ''}</h2>
        <button onClick={handleClose}>
          <FontAwesomeIcon icon={faSquareXmark} />
        </button>
      </div>
      {currentAttraction && (
        <>
          <div className='flex flex-col p-6'>
            <div className="flex flex-row">
              <div className="mb-2">
                <img src={currentAttraction.photo.images.medium.url} />
              </div>
              <div className="mb-2">
                <img src={currentAttraction.photo.images.medium.url} />
              </div>
            </div>
            <div className='p-3'>
              <div>
                <div className="mb-2">
                  <span className="font-semibold">Address:</span> {currentAttraction.address}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">City:</span> {currentAttraction.ranking_geo}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Rating:</span> {currentAttraction.rating}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Category:</span> {currentAttraction.subtype[0].name}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Description:</span>{" "}
                  {currentAttraction.description ? (
                    currentAttraction.description
                  ) : (
                    "No description available"
                  )}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Ranking:</span> {currentAttraction.ranking}
                </div>
              </div>
              <div>
                <button><FontAwesomeIcon icon={faLocationDot} /></button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}