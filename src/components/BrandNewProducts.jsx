import caseImage from './images/case.png';
import adapterImage from './images/adapter.png';
import airpodsImage from './images/Apple-Airpods-PNG-Clipart.png';
import headphoneImage from './images/Wireless-Headphone-PNG-HD-Quality.png';

import '../styles/BrandNewsStyle.scss';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: caseImage,
    caption: 'Slide 1'
  },
  {
    url: adapterImage,
    caption: 'Slide 2'
  },
  {
    url: airpodsImage,
    caption: 'Slide 3'
  },
  {
    url: headphoneImage,
    caption: 'Slide 4'
  },
];

const spanStyle = {
  padding: '20px',

  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

const BrandNewProducts = () => {
    return(
      <div className="brandnews-container">
        <div style={{marginBottom: 10}}>
          <h2>En Yeni Ürünler</h2>
        </div>
        <div className="each-product">
            <Slide transitionDuration={500} className="slider-container">
                {slideImages.map((slideImage, index) => 
                (
                <div key={index}>
                  <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                    <span style={spanStyle}></span>
                  </div>
                </div>                
                )
                )}     
            </Slide>
        </div>
      </div>  
    );
} 

export default BrandNewProducts;