import { RxCaretDown } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const CallOut = () => {
  return (
    <div className="callout-box">
      <div className="menu-bar">
        <div className="logo">
          <p data-testid="logo">Your Logo</p>
        </div>
        <div className="mobile-menu-list">
          <GiHamburgerMenu className="ico-ham" />
        </div>
        <div className="menu-list">
          <div className="menu">
            <div className="menu-item">
              <p>Explore</p>
            </div>
            <div className="menu-item">
              <p>About Us</p>
            </div>
            <div className="menu-item">
              <p className="drp-item">
                Cities
                <RxCaretDown className="caret" />
              </p>
            </div>
          </div>
          <button type="button" className="btn-call btn-call-light">
            call
          </button>
        </div>
      </div>
      <div className="center-box">
        <div className="title-box">
          <text className="title">Rethink your living & renting</text>
        </div>
        <div className="title-box">
          <text className="sub-title">Make your stay painless with us</text>
        </div>
      </div>
      <div className="search-box">
        <div className="form-container">
          <div className="inputgroup">
            <label htmlFor="" className="lbl">
              city
            </label>
            <input
              type="text"
              className="txt-input"
              placeholder="select your city"
            />
          </div>
          <div className="inputgroup">
            <label htmlFor="" className="lbl">
              dates
            </label>
            <input
              type="text"
              className="txt-input"
              placeholder="select your dates"
            />
          </div>
          <div className="inputgroup">
            <label htmlFor="" className="lbl">
              guests
            </label>
            <input type="text" className="txt-input" placeholder="Add guests" />
          </div>
          <div className="inputgroup">
            <button type="button" className="grd-btn grd-btn-lg">
              <text className="btn-content">
                {" "}
                <BiSearchAlt2 className="ico-search" /> Search
              </text>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallOut;
