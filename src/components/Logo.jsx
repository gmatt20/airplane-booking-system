import Icon from '@mdi/react';
import { mdiAirplane } from '@mdi/js';
import { Link } from "react-router-dom";

function Logo(){
  return(
  <Link to="/home">
    <div className="flex items-center">
      <Icon path={mdiAirplane}
        title="User Profile"
        size={2}
        horizontal
        vertical
        rotate={225}
        color="white"
      />
      <h1 className="text-3xl font-extrabold underline">AirplaneToGo.com</h1>
    </div>
  </Link>
  );
}

export default Logo;