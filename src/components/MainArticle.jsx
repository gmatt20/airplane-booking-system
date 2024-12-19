import Card from "./Card.jsx";
import Title from "./Title.jsx";

function MainArticle(){
  const title = {
    title: "Trending Flights",
    subtitle: "Domestic and international flights"
  };
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
       <Title titles = {title}></Title>
        <Card destinations = {trendingDestinations}/>
      </main>
    </>
  );
}

export default MainArticle;