import { useState } from 'react';
import '../styles/footer-madu.css';

const FooterMadu = () => {
    return(
        <footer>
            <div className="container-footer" id='footer'>
                <div className="row-footer">
                    {/* <a href=""><img src="/imgs/mdi_linkedin.svg" alt="" /></a> */}
                    <a href="https://wa.me/message/U7KX6BPRBVOYK1"><img src="/imgs/ri_whatsapp-fill.svg" alt="" /></a>
                    <a href="https://www.instagram.com/madupaivanutriprofissional/"><img src="/imgs/insta.svg" alt="" /></a>
                </div>
            </div>
        </footer>
    );
}

export default FooterMadu;