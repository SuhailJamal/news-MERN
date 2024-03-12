import "./Banner.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="iconAndTextContainer">
            <div className="backIcon">
              {" "}
              <IoMdArrowRoundBack />
            </div>
            <div className="header-left">Continue to the DailyGlobe</div>
          </div>
        </Link>
        <h1>DailyGlobe</h1>
      </div>
    </>
  );
};
export default Banner;
