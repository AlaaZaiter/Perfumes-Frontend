
import Header from "./Header";
import Category from "./Category";
import BestSaller from "./BestSaller.jsx";
import "../ComponentCSS/HomePageContainer.css";
import OurClients from "./OurClients.jsx";
import Footer from "./Footer.jsx";
import JoinUs from "./JoinUs.jsx";


function HomePage() {
    return (
      <div>
        <Header/>
        <Category/>
        <BestSaller/>
        <OurClients/>
        <JoinUs/>
        <Footer/>
      </div>
    )}
    export default HomePage;