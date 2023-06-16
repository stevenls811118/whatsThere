import {
  faCloud,
  faCloudBolt,
  faCloudRain,
  faCloudSun,
  faSmog,
  faSnowflake,
  faSpinner,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const weatherIcon = (iconCode) => {
  console.log(iconCode);
  switch (iconCode) {
    case 0:
    case 1:
      return <FontAwesomeIcon icon={faSun} size="2xl" style={{color: "#033e7c"}} />;
    case 2:
      return <FontAwesomeIcon icon={faCloudSun} size="2xl" style={{color: "#033e7c"}} />;
    case 3:
      return <FontAwesomeIcon icon={faCloud} size="2xl" style={{color: "#033e7c"}} />;
    case 45:
    case 48:
      return <FontAwesomeIcon icon={faSmog} size="2xl" style={{color: "#033e7c"}} />;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return <FontAwesomeIcon icon={faCloudRain} size="2xl" style={{color: "#033e7c"}} />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return <FontAwesomeIcon icon={faSnowflake} size="2xl" style={{color: "#033e7c"}} />;
    case 95:
    case 96:
    case 99:
      return <FontAwesomeIcon icon={faCloudBolt} size="2xl" style={{color: "#033e7c"}} />
    default:
      <FontAwesomeIcon icon={faSpinner} spin size="2xl" style={{color: "#033e7c"}} />;
  }
};
