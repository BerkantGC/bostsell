import philipsLogo from "./images/philips-logo.png";
import sandiskLogo from "./images/sandisk-logo-1.png";
import ttecLogo from "./images/ttec-150x150.png";
import powerwayLogo from "./images/ef85340598f5a483981e674ab8802f00x.png";
import deximLogo from "./images/dexim2217.png";

import '../styles/PartnershipStyle.scss';

const Partnership = () => {
    return (
        <div>
            <div className="ps-title-container">
                <h3>
                    İş Ortaklarımız
                </h3>
            </div>
            <div className="ps-container">
                <div>
                    <img src={philipsLogo} width={window.innerWidth/8} />
                </div>
                <div>
                    <img src={sandiskLogo} width={window.innerWidth/8} />
                </div>
                <div>
                    <img src={ttecLogo} width={window.innerWidth/8} />
                </div>
                <div>
                    <img src={powerwayLogo} width={window.innerWidth/8} />
                </div>
                <div>
                    <img src={deximLogo} width={window.innerWidth/8} />
                </div>
            </div>
        </div>
    )
}

export default Partnership;