import { Link } from "react-router-dom";
import Options from './Options.jsx';

function Header(){

  const buttonLabelsArr = [
    {
      label: "View All Seats",
      link: "/changeseats",
    },
    {
      label: "View Available Seats",
      link: "/availableseats",
    },
    {
      label: "Book a Seat",
      link: "/bookseats",
    },
    {
      label: "Cancel a Seat",
      link: "/cancelseats",
    },
    {
      label: "Change a Seat",
      link: "/changeseats",
    },
  ]

  return(
    <header className="w-screen p-5 bg-sky-600 text-white">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/home">
            <h1>AirplaneToGo.com</h1>
          </Link>
        </div>
        <div>
          <Options buttonLabels = {buttonLabelsArr}/>
        </div>
      </div>
    </header>
  );
}

export default Header;