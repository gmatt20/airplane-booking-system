import Header from "../components/Header";
import Seats from "../components/Seats";
import Title from "../components/Title";
import Footer from "../components/Footer";

function AllSeats(){
  const title = {
    title: "All Seats",
    subtitle: "Preview the seats of flight #AA1234"
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

export default AllSeats;