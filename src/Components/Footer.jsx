import { useState } from "react";
import { Link } from "react-router-dom";
import "../ComponentCSS/Footer.css";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const accordionData = [
    {
      title: `What are the different types of perfumes available?`,
      content: `Lorem ipsum dolor sit amet, consectetur`,
    },
    {
      title: "How are perfumes classified based on their concentration levels?",
      content: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      title: "How can I choose the right perfume for myself?",
      content: "Lorem ipsum dolor sit amet, consectetur",
      // image: "../public/images/down.png",
    },
  ];
  return (
    <div>
      <div className="FooterContainer">
        <div className="">
          <div className="footer_content">
            <p className="Footer_title">Contact Us</p>
            <p>Telephone : 70 123 4567</p>
            <p>Email :Luxperfume@gmail.com</p>
          </div>
        </div>

        <div className="InformationDiv">
          <p className="text-white Footer_title">Information</p>
          <div className="accordion">
            {accordionData.map((item, index) => (
              <div className="accordion-item" key={index}>
                <div
                  className="text-white flex items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <img src="images/Next_page.png" alt="Next" />
                  <p>{item.title}</p>
                </div>
                {activeIndex === index && (
                  <div className="text-white">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid SocialDiv">
          <p className="text-white  Footer_title"> Social Media</p>
          <div className="flex items-center justify-center">
            <img src="images/facebook.png"></img>{" "}
            <Link to="www.facebook.com">facebook</Link>
          </div>
          <div className="flex items-center justify-center">
            <img src="images/Instagram.png"></img>
            <Link to="www.instagram.com">Instagram</Link>
          </div>
          <div className="flex items-center justify-center">
            <img src="images/WhatsApp.png"></img>
            <Link to="www.whatsapp.com">Whatsapp</Link>
          </div>
        </div>
        <p className="text-white">Copyright &copy; </p>
      </div>
    </div>
  );
};

export default Footer;
