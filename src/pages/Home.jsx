import Header from "../components/Header";
import MainArticle from "../components/MainArticle.jsx";
import Footer from "../components/Footer";

function Home(){

  return(
    <div className="h-screen grid grid-rows-[auto_5fr_auto] grid-flow-row">
      <Header></Header>
      <MainArticle></MainArticle>
      <Footer></Footer>
    </div>
  );
}

export default Home;