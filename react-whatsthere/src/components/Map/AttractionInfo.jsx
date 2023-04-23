import { faSquareXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AttractionInfo({ attractionInfoShown, attraction, attractions, setAttractionInfoShown }) {
  const handleClose = () => {
    setAttractionInfoShown(false);
  };

  const currentAttraction = attractions.find((a) => a.name === attraction.name);

  return (
    <div className={`attraction-info ${attractionInfoShown ? 'show' : ''} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md w-[100%] h-[100%] overflow-y-auto`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{currentAttraction ? currentAttraction.name : ''}</h2>
        <button onClick={handleClose}>
          <FontAwesomeIcon icon={faSquareXmark} />
        </button>
      </div>
      {currentAttraction && (
        <>
          <div className='flex p-6'>
            <div className="mb-2">
              <img src={currentAttraction.photo.images.medium.url} />
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