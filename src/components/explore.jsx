import galary1 from "./../assets/images/galary_1.jpg";
import galary2 from "./../assets/images/galary_2.jpg";


const Explore = () => {
  return (
    <div className="explore-box">
      <p className="heading">Explore</p>
      <p className="sub-title">
        From one-guest rooms to penthouses with pools and gardens
      </p>
      <div className="galary">
        <div className="galary-item" style={{backgroundImage:`url(${galary1})`}}>
          <div className="banner">
            <div className="left-options">
              <p className="title">Room with one king-size bed</p>
              <div className="options">
                <button type="button" className="grd-btn">35$</button>
                <button type="button" className="grd-btn">28м²</button>
              </div>
            </div>
            <div className="right-options">
              <button type="button" className="grd-btn">Book!</button>
            </div>
          </div>
        </div>
        <div className="galary-item" style={{backgroundImage:`url(${galary2})`}}>
          <div className="banner">
            <div className="left-options">
              <p className="title">Penthouse for 8 person</p>
              <div className="options">
                <button type="button" className="grd-btn">2039$</button>
                <button type="button" className="grd-btn">438м²</button>
              </div>
            </div>
            <div className="right-options">
              <button type="button" className="grd-btn">Book!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
