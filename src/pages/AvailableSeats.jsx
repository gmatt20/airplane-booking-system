import Header from "../components/Header";
import Seats from "../components/Seats";
import Title from "../components/Title";
import Footer from "../components/Footer";

function AvailableSeats(){
  const title = {
    title: "All Available Seats",
    subtitle: "All of the available seats are in green."
  };
  
  return(
    <>
      <Header></Header>
      <main className="m-5">
      <Title titles = {title}></Title>
        <div className="p-5">
          <Seats></Seats>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default AvailableSeats;