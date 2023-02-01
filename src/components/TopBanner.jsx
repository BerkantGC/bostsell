import "../styles/TopBannerStyle.scss";
import logo from '../components/images/BOSTlogo.png'

import { useNavigate } from "react-router-dom";

const TopBanner = () => {
    return (
        <div className="main-container">
            <a href="/" style={{textDecoration: 'none'}} className="left-side-banner">
                <img src={logo} alt="logo" width={38} color="white" className="logo"/>
                <p className="company-name">BOST-SELL</p>
            </a>
            <div className="right-side-banner">
                <a className="topbanner-links" href="/hakkimizda">
                    Hakkımızda
                </a>
            </div>
        </div>
    )
}

export default TopBanner;