import Header from "../components/Header";
import Title from "../components/Title";
import Seats from "../components/Seats";
import Footer from "../components/Footer";

function ChangeSeats(){
  const title = {
    title: "Chang a Seat",
    subtitle: "Please choose a seat to change.",
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

export default ChangeSeats;