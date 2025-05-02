import { useState } from 'react';

const Pontos = () => {
    return (
        <div className="container-pontos-prin" id='pontos'>
            <div className="row-pontos">
                <h2>O que você vai encontrar no FLORESCER</h2>
            </div>
            <div className="row-cards">
                <div className="card">
                    <img src="/imgs/coracao.svg" alt="" className="icon-pontos" />
                    <p>Acolhimento, suporte e liberdade alimentar com leveza</p>
                </div>
                <div className="card">
                    <img src="/imgs/video.svg" alt="" className="icon-pontos" />
                    <p>Aulas em vídeo com linguagem leve e acolhedora</p>
                </div>
                <div className="card">
                    <img src="/imgs/caderno.svg" alt="" className="icon-pontos" />
                    <p>Protocolos naturais para dores crônicas, ansiedade e compulsão</p>
                </div>
           
                <div className="card">
                    <img src="/imgs/Vector.svg" alt="" className="icon-pontos" />
                    <p>Técnicas simples de aromaterapia, florais, auriculoterapia e cromoterapia</p>
                </div>
                <div className="card">
                    <img src="/imgs/Vector-1.svg" alt="" className="icon-pontos" />
                    <p>Guias e apostilas com base científica e prática clínica</p>
                </div>
                <div className="card">
                    <img src="/imgs/Vector-2.svg" alt="" className="icon-pontos" />
                    <p>Um plano de transformação de dentro pra fora</p>
                </div>
                <div className="card">
                    <img src="/imgs/comida.svg" alt="" className="icon-pontos" />
                    <p>Receitas práticas, saudáveis e anti-inflamatórias</p>
                </div>
            </div>
            <div className="row-fotos">
                <div className="col foto1">
                    <img src="/imgs/RECEBA NOSSA.png" width={450} height={400} alt="" />
                </div>
                <div className="col">
                    <img src="/imgs/2.png" height={400} width={300} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Pontos;
