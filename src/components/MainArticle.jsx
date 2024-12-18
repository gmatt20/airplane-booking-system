import Card from "./Card.jsx";

function MainArticle(){
  const trendingDestinations = [
    {
      city: "Orlando",
      price: 174,
      img: "/orlando.jpg",
    },
    {
      city: "Las Vegas",
      price: 218,
      img: "/lasvegas.jpg",
    },
    {
      city: "New York",
      price: 491,
      img: "/newyork.jpg",
    },
    {
      city: "Atlanta",
      price: 153,
      img: "/atlanta.jpg",
    },
    {
      city: "Tokyo",
      price: 223,
      img: "/tokyo.jpg",
    },
  ];

  return(
    <>
      <main className="m-5">
        <div className="mb-3">
          <h1 className="font-bold text-2xl">Trending Flights</h1>
          <p>Domestic and international flights</p>
        </div>
          <Card destinations = {trendingDestinations}/>
      </main>
    </>
  );
}

export default MainArticle;