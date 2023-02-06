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
  width: '300px',
  height: '300px'
}

const BrandNewProducts = () => {
    return(
      <div className="brandnews-container">
        <div style={{marginBottom: 10}}>
          <h2>En Yeni Ürünler</h2>
        </div>
        <div className={`${window.innerWidth > 600 ? "each_product_browser" : 'each_product_mobile'}`}>
          <Slide transitionDuration={500} className="slider-container">
              {slideImages.map((slideImage, index) => 
              (
              <div className='each-product-img-container' key={index}>
                <a href={`/urunler/${slideImage.link}`} style={{backgroundImage: `url(${slideImage.url})`, height: window.innerHeight/3,
                width: window.innerWidth/3, justifyContent: 'center', alignContent: 'center', backgroundSize: 'contain', backgroundPosition : 'center' }} 
                className='each-product-img'>
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