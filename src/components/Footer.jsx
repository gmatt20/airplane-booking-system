import Logo from "../components/Logo";
import Icon from '@mdi/react';
import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
import { Link } from "react-router-dom";

function Footer(){
  return(
    <footer className="bg-sky-950 w-screen text-white px-10 py-5">
        <div className="flex gap-10 justify-around items-center">
          <div>
            <Logo></Logo>
            <h1>+1 (123) 456 7890</h1>
            <p>support@airplanetogo.com</p>
          </div>
          <div>
            <h1 className="font-bold">Quick Links</h1>
            <ul>
              <Link to="/allseats"><li className="text-sm">All Seats</li></Link>
              <Link to="/availableseats"><li className="text-sm">Available Seats</li></Link>
              <Link to="/bookseats"><li className="text-sm">Book a Seat</li></Link>
              <Link to="/cancelseats"><li className="text-sm">Cancel a Seat</li></Link>
              <Link to="/changeseats"><li className="text-sm">Change a Seat</li></Link>
            </ul>
          </div>
          <div className="flex gap-5">
          <Icon path={mdiInstagram} size={2} />
          <Icon path={mdiFacebook} size={2} />
          <Icon path={mdiTwitter} size={2} />
        </div>
        </div>
      </footer>
  );
}

export default Footer;