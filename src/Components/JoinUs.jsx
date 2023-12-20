import "../ComponentCSS/JoinUs.css"

const JoinUs = () => {
  return (
    <div className="m-2">
      <div className="grid items-center justify-center ">
        <h1 className="letter_title">JOIN OUR BEAUTY FAMILY!</h1>
        <div className="FooterInputContainer">
          <div className="letter">
          <input type="text" placeholder="enter your email" />
          <button className="btn-footer">Subscribe now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
