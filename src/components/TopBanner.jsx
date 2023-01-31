import "../styles/TopBannerStyle.scss";
import logo from '../components/images/BOSTlogo.png'
const TopBanner = () => {
    return (
        <div className="main-container">
            <div className="left-side-banner">
                <img src={logo} alt="logo" width={38} color="white" className="right-side-banner"/>
                <p className="company-name">BOST-SELL</p>
            </div>
        </div>
    )
}

export default TopBanner;