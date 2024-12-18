import Card from "./Card.jsx";

function MainArticle(){
  const trendingDestinations = [
    {
      city: "Orlando",
      price: 174,
      img: "/public/orlando.jpg",
    },
    {
      city: "Las Vegas",
      price: 218,
      img: "/public/lasvegas.jpg",
    },
    {
      city: "New York",
      price: 491,
      img: "/public/newyork.jpg",
    },
    {
      city: "Atlanta",
      price: 153,
      img: "/public/atlanta.jpg",
    },
    {
      city: "Tokyo",
      price: 223,
      img: "/public/tokyo.jpg",
    },
  ];

  return(
    <>
      <main className="m-5">
          <h1>Popular flights near you</h1>
          <p>Domestic and international flights</p>
          <Card destinations = {trendingDestinations}/>
      </main>
    </>
  );
}

export default MainArticle;