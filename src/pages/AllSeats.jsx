import Header from "../components/Header";
import Seats from "../components/Seats";

function AllSeats(){

  return(
    <>
      <Header></Header>
      <div className="p-5">
        <h1>View All Seats</h1>
        <Seats></Seats>
      </div>
    </>
  );
}

export default AllSeats;