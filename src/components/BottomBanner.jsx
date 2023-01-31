import "../styles/BottomBannerStyle.scss";
import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube} from 'react-icons/ai';

const LinkToNavigate = (props) => {
return(
    <a target="_blank" rel="noopener noreferrer" className="link" href={props.link}>
        <div>
            {
                props.title == "Instagram" && <AiOutlineInstagram size={35}/>  
            }
            {
                props.title == "Linkedin" && <AiOutlineLinkedin size={35}/>
            }
            {
                props.title == "Youtube" && <AiOutlineYoutube size={35}/>
            }
        </div>
    </a>
)
}
  
export default function()
{
    return(
        <div className="container">
            <div className="communication">
                <div className="comm-container">
                    <h3 style={{color: 'white'}}>İletişim</h3>
                    <p style={{color: 'white', fontSize: '90%'}}>Şehirler bulvarı no.2c Bostanlı MH.  Karşıyaka İzmir</p>
                    <p style={{color: 'white', fontSize: '90%'}}>Telefon: +90 212 364 64 64<br></br>
                    Faks: +90 212 310 46 80<br/>
                    E-mail: musteri.hizmetleri@arena.com.tr</p>
                </div>
            </div>
            <div className='all-links'>
                <div>
                    <h3 style={{color: 'white', fontSize: '100%'}}>Bizi takip edin.</h3>
                </div>
                <div className="link-container">
                    <LinkToNavigate title='Instagram' link='https://www.instagram.com/bost_sell/'/>

                    <LinkToNavigate title='Linkedin' link='https://www.linkedin.com/company/ya%C5%9Far-%C3%BCniversitesi-mobil-uygulama-geli%C5%9Ftirme-toplulu%C4%9Fu/'/>
                    
                    <LinkToNavigate title='Youtube' link='https://www.youtube.com/channel/UCgj31r8y7gOfyDh0mGJKQqQ'/>
                </div>
            </div>
        </div>
    )
}