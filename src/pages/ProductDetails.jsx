import {useNavigate, useParams} from "react-router-dom"
import TopBanner from "../components/TopBanner";

import "../styles/ProductDetailsStyle.scss";

const ProductDetails = () => {
    const {urunAdi} = useParams();

    return(
        <div className="product-detail-all-container">
            <TopBanner/>
            <div className="product-detail-container">
                <div className="product-detail-title">
                    <h2>{urunAdi}</h2>
                </div>
                <div className="product-detail-infos">
                    <p>
                    Dikkat: Bu model Airpods 2.Nesil kablolu şarjlı modeldir. Kablosuz şarjlı değildir.<br/>
                    Her zamankinden daha sihirli.<br/>
                    Yeni AirPods, akıllı bir tasarımı çığır açan bir teknoloji ve kristal netliğinde bir ses kalitesiyle buluşturuyor. Gücünü yeni Apple H1 kulaklık çipinden alan AirPods ile şimdi ellerinizi kullanmadan yalnızca sesinizle Siri’ye erişebilirsiniz. Üstelik tek bir şarjla  3 saate kadar konuşma süresi elde edersiniz.<br/>
                    <br/>Temel özellikler<br/>
                    • Otomatik olarak açılıyor, otomatik olarak bağlanıyor<br/>

                    • Tüm Apple aygıtlarınız için kolay kurulum<br/>

                    • “Hey Siri” diyerek Siri’ye hızlı erişim<br/>

                    • Oynatmak veya bir sonrakine atlamak için çift dokunuş<br/>

                    • Yeni Apple H1 kulaklık çipiyle aygıtlarınızda  daha hızlı kablosuz bağlantı<br/>

                    • Şarj kutusunda hızlı şarj imkanı • Şarj kutusu, Lightning konnektörüyle şarj edilebilir<br/>

                    • Zengin ve yüksek kalitede ses<br/>

                    • Aygıtlar arasında sorunsuz geçiş<br/>

                    • Şarj Kutusu ile birçok kez şarj ederek gün boyu dinleme ve konuşma imkanı<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;