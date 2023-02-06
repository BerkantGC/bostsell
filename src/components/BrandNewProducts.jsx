import caseImage from './images/case.png';
import adapterImage from './images/adapter.png';
import airpodsImage from './images/Apple-Airpods-PNG-Clipart.png';
import headphoneImage from './images/Wireless-Headphone-PNG-HD-Quality.png';

import '../styles/BrandNewsStyle.scss';
 import { Navigate } from 'react-router-dom';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: caseImage,
    caption: 'Slide 1',
    link: "kilif"
  },
  {
    url: adapterImage,
    caption: 'Slide 2',
    link: "sarj-adaptoru"
  },
  {
    url: airpodsImage,
    caption: 'Slide 3',
    link: "airpods"
  },
  {
    url: headphoneImage,
    caption: 'Slide 4',
    link: "kulaklik"
  }
];

const spanStyle = {
  padding: '20px',
  width : '100%',
  height: '100%',

  color: '#000000'
}

const divStyle = {
  backgroundSize: 'cover',
  height: "100%",
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const BrandNewProducts = () => {
    return(
      <div className="brandnews-container">
        <div style={{marginBottom: 10}}>
          <h2>En Yeni Ürünler</h2>
        </div>
        <div className="each-product" style={{width: window.innerWidth/3}}>
            <Slide transitionDuration={500} className="slider-container">
                {slideImages.map((slideImage, index) => 
                (
                <div className='each-product-img-container' style={{height: window.innerHeight/3}} key={index}>
                  <a href={`/urunler/${slideImage.link}`} style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                    <span style={spanStyle}></span>
                  </a>
                </div>                
                )
                )}     
            </Slide>
        </div>
      </div>  
    );
} 

export default BrandNewProducts;