import chapter1 from "./../assets/images/chapter_1.jpg";
import chapter2 from "./../assets/images/chapter_2.jpg";
import chapter3 from "./../assets/images/chapter_3.jpg";
import chapter4 from "./../assets/images/chapter_4.jpg";


const AboutUs = () => {
  return (
    <div className="about-us-box">
    <p data-testid="about" className="heading">About Us</p>
    <p className="sub-title">Allow us to tell you a short story...</p>
    <div className="galary">
      <div className="galary-item" style={{backgroundImage:`url(${chapter1})`}} >
        <div className="banner">
          <p className="title">Chapter I</p>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun
          </p>
        </div>
      </div>
      <div className="galary-item" style={{backgroundImage:`url(${chapter2})`}} >
        <div className="banner">
          <p className="title">Chapter 2</p>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun
          </p>
        </div>
      </div>
      <div className="galary-item" style={{backgroundImage:`url(${chapter3})`}} >
        <div className="banner">
          <p className="title">Chapter 3</p>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun
          </p>
        </div>
      </div>
      <div className="galary-item" style={{backgroundImage:`url(${chapter4})`}} >
        <div className="banner">
          <p className="title">Chapter 4</p>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutUs;
