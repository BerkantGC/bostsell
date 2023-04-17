import ibost_headphone from './images/iBOST-kulaklik5.png';
import adapterImage from './images/04-ibost.jpg';
import kirilmazCam from './images/kirilmaz-cam.png';



import '../styles/BrandNewsStyle.scss';
 import { Navigate } from 'react-router-dom';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: ibost_headphone,
    caption: 'Slide 1',
    link: "ibost-kulaklik"
  },
  {
    url: adapterImage,
    caption: 'Slide 2',
    link: "ibost-kulaklik"
  },
  {
    url: kirilmazCam,
    caption: 'Slide 3',
    link: "kirilmaz-cam"
  },
];

const spanStyle = {
  padding: '20px',
  width : '100%',
  height: '100%',

  color: '#000000'
}

const divStyle = {
  width: '350px',
  height: '350px'
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
                <a href={`/urunler/${slideImage.link}`} style={{backgroundImage: `url(${slideImage.url})`, height: window.innerHeight/2,
                width: window.innerWidth/2, justifyContent: 'center', alignContent: 'center', backgroundSize: 'contain', backgroundPosition : 'center' }} 
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