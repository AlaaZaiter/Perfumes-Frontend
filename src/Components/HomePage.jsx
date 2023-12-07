
import Header from "./Header";
import Category from "./Category";
import BestSaller from "./BestSaller.jsx";
import FooterAndOurClients from "./FooterAndOurClients";
import "../ComponentCSS/HomePageContainer.css"

function HomePage() {
    return (
      <div className="HomePageContainer">
        <Header/>
        <Category/>
        <BestSaller/>
        <FooterAndOurClients/>
      </div>
    );
  }
  
  export default HomePage;
  