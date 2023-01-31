import image from '../components/images/powerbank.png';
import '../styles/ProductsStyle.scss';

const ProductOfMonth = () => {
    return(
      <div className='months-product-container'>
        <h2>Ayın Ürünü</h2>
        <img src={image} style={{width: '80%'}} />
        <h4>Xiaomi Ultra Compact Pro 3 10000 Mah Siyah Powerbank BHR4412GL </h4>
      </div>  
    );
} 

export default ProductOfMonth;