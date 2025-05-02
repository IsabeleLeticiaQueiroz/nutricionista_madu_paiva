import { useState } from 'react';
import '../styles/footer-madu.css';

const FooterMadu = () => {
    return(
        <footer>
            <div className="container-footer" id='footer'>
                <div className="row-footer">
                    <img src="/imgs/mdi_linkedin.svg" alt="" />
                    <img src="/imgs/ri_whatsapp-fill.svg" alt="" />
                    <img src="/imgs/ic_baseline-facebook.svg" alt="" />
                    <img src="/imgs/insta.svg" alt="" />
                </div>
            </div>
        </footer>
    );
}

export default FooterMadu;