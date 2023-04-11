const Footer = () => {
  return (
    <div className="footer-box">
      <div className="logo-box">
        <p className="logo">Your Logo</p>
        <p className="copy-text">© 2021 Company Name All rights reserved</p>
      </div>
      <div className="options-box">
        <div className="menu">
          <div className="menu-item">
            <p>Explore</p>
          </div>
          <div className="menu-item">
            <p>About Us</p>
          </div>
          <div className="menu-item">
            <p> Cities </p>
          </div>
        </div>
        <button type="button" className="btn-call btn-call-dark">
          call
        </button>
      </div>
    </div>
  );
};

export default Footer;
