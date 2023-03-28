import image from '../components/images/ibost-kulaklik.jpg';
import '../styles/ProductsStyle.scss';

const ProductOfMonth = () => {
    return(
      <a href='/urunler/ibost-kulaklik' rel="noopener" className='months-product-container'>
        <h2>Ayın Ürünü</h2>
        <img src={image} style={{width: '80%'}} />
        <h4>iBOST Kulaklık </h4>
      </a>  
    );
} 

export default ProductOfMonth;