
import Header from "./Header";
import BestSeller from "./BestSeller.jsx"

import "../ComponentCSS/HomePageContainer.css";
import OurClients from "./OurClients.jsx";
import Footer from "./Footer.jsx";
import JoinUs from "./JoinUs.jsx";
import CategoryOf from "./CategoryOf.jsx"



function HomePage() {
    return (
      <div>
        <Header/>
        <CategoryOf/>
        <BestSeller/>
        <OurClients/>
        <JoinUs/>
        <Footer/>
      </div>
    )}
    export default HomePage;


      
      
