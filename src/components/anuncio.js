import { useState } from 'react';
const Anuncio = () => {
    return(
        <div className="container-anuncio" id='anuncio'>
            <div className="row-title-anuncio">
                <h2>Conheça meu método:</h2>
            </div>
            <div className="row-logo">
                <img src="/imgs/logo-florescer-svg.svg" alt="" />
            </div>
            <div className="row-desc">
                <p>O <span className='rosa'> <a href="">Método FLORESCER</a></span> nasceu com o propósito de transformar vidas através 
                    de uma abordagem integrativa e amorosa, que une nutrição funcional, práticas naturais e autocuidado energético
                     e emocional. É uma jornada para todos que desejam se reconectar com o próprio corpo, respeitar seus ciclos e encontrar 
                     leveza no caminho da cura.
                    Aqui, cada detalhe foi pensado com carinho. E mais do que um curso, esse é um convite para se acolher, se fortalecer e 
                    florescer no seu ritmo, no seu tempo, com verdade.</p>
            </div>
            <div className="row-btn-link">
                <a href="/florescer">Interessado(a)? Clique aqui para saber mais!</a>
            </div>
        </div>
    );
}
export default Anuncio;