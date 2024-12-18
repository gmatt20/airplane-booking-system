import Options from './Options.jsx';

function Header(){
  const buttonLabelsArr = [
    "View All Seats",
    "View Available Seats",
    "Book a Seat",
    "Cance a Seat",
    "Change a Seat",
  ]

  return(
    <header className="w-screen p-5 bg-sky-600 text-white">
      <div className="flex justify-between">
        <div>
          <h1>AirplaneToGo.com</h1>
        </div>
        <div>
          <Options buttonLabels = {buttonLabelsArr}/>
        </div>
      </div>
    </header>
  );
}

export default Header;