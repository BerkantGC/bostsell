import {useNavigate, useParams} from "react-router-dom"
import TopBanner from "../components/TopBanner";
import BottomBanner from "../components/BottomBanner";

import "../styles/ProductDetailsStyle.scss";

import caseImage from '../components/images/DetailedAirphone.png';
import airpodsImage from '../components/images/04-ibost.jpg';
import kulaklikImage from '../components/images/ibost-kulaklik.jpg';
import kirilmazCam from '../components/images/kirilmaz-cam.png';

const airpodsDescrip = () => {
    return(
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
    )
}

const caseDescription = () => {
    return(
        <p>
            İnce silikon materyal ve dayanıklılığı ile çizilme ve düşmeye karşı cihazınızı korur. Silikon materyal ile cihazınızı ekstra rahat tutuş hissi verirken konforunuzu arttırır.Saydam görünüm,ince ve hafif tasarımlı Yükseltilmiş kenar ve kamera bölümleriCihaz arkasında iz bırakmayan yapıErgonomik butonlar ile kolay ve yumuşak basımCihazınızı tam saran tasarım
        </p>
    )
}
const adapterDescrip = () => {
    return(
        <p>
            Apple 20 W USB-C Güç Adaptörü, aygıtınızı evde, ofiste veya yolda hızlı ve verimli bir şekilde şarj etme imkanı sunar. Bu güç adaptörü, USB-C özellikli tüm aygıtlarla uyumludur. Ancak Apple, optimum şarj performansı için bu adaptörü iPad Pro ve iPad Air ile birlikte kullanmanızı önerir. Hızlı şarj özelliğinden yararlanmak için bu adaptörü iPhone 8 veya daha yeni model bir iPhone ile de kullanabilirsiniz.

Şarj kablosu ayrı satılır. 
Apple.com üzerinden garanti sorgusu sadece cihazlar için yapılabilir (iPhone, iPad, Macbook, Watch, Airpods vb.)
Adaptör, Kablo, Kablolu kulaklık, Kılıf gibi aksesuar ürünlerinde garanti sorgusu yapılamaz, teknik servislerden kontrol ettirilebilir
        </p>
    )
}
const productInfos = [
    {
        image: caseImage,
        link: "kulaklik",
        title: "KULAKLIK",
        description: caseDescription
      },

      {
        image: airpodsImage,
        link: "airpods",
        title: "AIRPODS",
        description: airpodsDescrip
      },
      {
        image: kulaklikImage,
        link: "ibost-kulaklik",
        title: "KULAKLIK",
        description: caseDescription
      },
      {
        image: kirilmazCam,
        link: "kirilmaz-cam",
        title: "KIRILMAZ CAM",
        description: caseDescription
      }
]
const ProductDetails = () => {
    const {urunAdi} = useParams();

    productInfos.map(element => { 
        if(element.link === urunAdi)
        console.log(element);
    }
    )
    return(
        <div className="product-detail-all-container">
            <TopBanner/>
                {
                productInfos.map(element => { 
                    return(
                    element.link === urunAdi && (
                    <div className="product-detail-container">
                        <div className="product-detail-title">
                            <h2>{element.title}</h2>
                        </div>
                        <div className="product-detail-image-container">
                            <img src={element.image} width="250"/>
                        </div>
                        <div className="product-detail-infos">
                            <element.description/>
                        </div>
                    </div>));
                })
                }
            <BottomBanner/>
        </div>
    )
}

export default ProductDetails;