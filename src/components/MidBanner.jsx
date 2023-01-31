import "../styles/MidBannerStyle.scss";
import image1 from "./images/jj-ying-8bghKxNU1j0-unsplash.jpg";

const MidBanner = () => {
    return(
        <div className="introduction" style={{backgroundImage: `url(${image1})`,  backgroundRepeat: 'no-repeat', width:'auto', height: '350px',
        backgroundSize: 'cover' }}>
            <div className="information">
                <h1>BOST-SELL</h1>
                <p>Türkiye'nin lider teknoloji sağlayıcısı olarak en yenilikçi teknoloji ürün ve çözümleri ülkemizin her bir noktasına ulaştırıyoruz.</p>
            </div>
        </div>
    )
}

export default MidBanner;