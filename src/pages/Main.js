import BottomBanner from '../components/BottomBanner';
import BrandNewProducts from '../components/BrandNewProducts';
import MidBanner from '../components/MidBanner';
import Partnership from '../components/Partnership';
import ProductOfMonth from '../components/ProductOfMonth';
import TopBanner from '../components/TopBanner';

import logo from '../logo.svg';
import '../styles/Main.scss';

function Main() {
  return (
    <div>
      <TopBanner/>
      <MidBanner/>
      <div className='products-container'>
        <ProductOfMonth/>
        <BrandNewProducts/>
      </div>
      <Partnership/>
      <BottomBanner/>
    </div>
  );
}

export default Main;
