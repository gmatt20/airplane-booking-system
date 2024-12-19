import Options from './Options.jsx';
import Logo from './Logo.jsx';

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
        <Logo></Logo>
        <div>
          <Options buttonLabels = {buttonLabelsArr}/>
        </div>
      </div>
    </header>
  );
}

export default Header;