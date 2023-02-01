import {
    BrowserRouter as Router,
    Routes,
    Route, 
} from "react-router-dom";

import Main from "./Main";
import ProductDetails from "./ProductDetails";


export default function()
{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="urunler/:urunAdi" element={<ProductDetails/>}/>
            </Routes>
        </Router>
    )
}