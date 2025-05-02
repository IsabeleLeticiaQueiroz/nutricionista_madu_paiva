    import { useState } from 'react';
    import '../styles/principios-madu.css';
    const PrincipiosMadu = () => {
        return(
            <>
            <div className="container-principios">
                <div className="row-titulo">
                    <div className="principios">
                        <h2>Meus Princípios</h2>
                    </div>
                </div>
                <div className="row-principios">
                    <div className="col-principio-prim">
                        <div className="esquerda">
                            <img src="/imgs/1.svg" alt="" />
                        </div>
                        <div className="direita">
                            <h4>Nutrição Consciente</h4>
                            <p>Acredito que comer é mais do que nutrir o corpo — é um gesto de presença, autocuidado e respeito 
                            ao meu processo de evolução. </p>
                        </div>
                    </div>
                    <div className="col-principio">
                        <div className="esquerda">
                            <img src="/imgs/2.svg"  alt=""  />
                        </div>
                        <div className="direita">
                            <h4>Leveza com Propósito</h4>
                            <p>Busco equilíbrio entre ciência e intuição, entre estrutura e liberdade.  Acredito que é possível crescer com 
                                leveza e consistência. </p>
                        </div>
                    </div>
                    <div className="col-principio">
                        <div className="esquerda">
                            <img src="/imgs/3.svg" className='TERC' alt="" />
                        </div>
                        <div className="direita">
                            <h4>Acolhimento Individual</h4>
                            <p>Vejo cada ser humano como um universo.  Respeito sua história, escuto com empatia e ofereço caminhos personalizados para que
                                floresça no seu tempo e no seu ritmo.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rosa-linha"></div>
            </>
        );
    }
    export default PrincipiosMadu;