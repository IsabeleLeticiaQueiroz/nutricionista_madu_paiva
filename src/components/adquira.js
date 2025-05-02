import { useState } from 'react';


const Adquira = () => {
    return (
        <div className="container-adquira" id='adquira'>
            <div className="row-adquira">
                <h2>Adquira já!</h2>
            </div>
            <div className="row-final">
                <div className="esquerda">
                    <img src="/imgs/RECEBA NOSSA (1).png" width={400} alt="" />
                </div>
                <div className="direita">
                    <p>Te interressou?</p>
                    <div className="btn-rosa">
                    <a className='' href="">CONFIRA</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Adquira;
