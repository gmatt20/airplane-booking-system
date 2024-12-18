import { Link } from "react-router-dom";
import Options from './Options.jsx';

function Header(){

  const buttonLabelsArr = [
    {
      label: "All Seats",
      link: "/allseats",
    },
    {
      label: "Available Seats",
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
    <header className="w-screen p-5 bg-sky-700 text-white">
      <div className="flex justify-between items-center flex-wrap">
        <div className="">
          <Link to="/home">
            <h1 className="text-3xl font-extrabold">AirplaneToGo.com</h1>
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