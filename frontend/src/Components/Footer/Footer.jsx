import { Link } from "react-router-dom";
import "./Footer.css";
import DailyGlobeIcon from "../../assets/White Grey Dark Blue Light Professional General News Logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div >
                <img src={DailyGlobeIcon} alt="Logo-footer" className="logo-footer"/>
            </div>
            <div className="list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/politics">Politics</Link></li>
                    <li><Link to="/sports">Sports</Link></li>
                </ul>
            </div>
            <div className="list">
                <ul>
                    <li><Link to="/games">Games</Link></li>
                    <li><Link to="/">Terms</Link></li>
                    <li><Link to="/">Developer</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;