import { useState } from 'react';

const SobreMadu = () => {
    return(
        <div className="container-sobre-madu" id='sobre-madu'>
            <div className=" row-sobre-madu">
                <div className="col-esquerda-madu">
                    <img src="/imgs/madu.png" width={380}  alt="" />
                </div>
                <div className="col-direita-madu">
                    <div className="pergunta-madu">
                        <h2>QUEM É A NUTRICIONISTA MARIA EDUARDA?</h2>
                    </div>
                    <div className="sobre-madu">
                        <p>Minha jornada na saúde começou em 2020, no meio do turbilhão da pandemia, quando iniciei minha graduação em 
                            Nutrição. Foi também nesse período que senti o chamado para um cuidado mais profundo e integral, o que me levou
                             a me formar em terapias holísticas, como auriculoterapia e aromaterapia, ainda durante a faculdade.
                            Em 2023, me formei como nutricionista e atuei na saúde pública, em UBS e hospital, além de realizar atendimentos 
                            particulares e consultorias online com foco em emagrecimento saudável e promoção da qualidade de vida. Em 2024, 
                            iniciei minha pós-graduação em Nutrição Clínica, Ortomolecular, Funcional e Fitoterapia, reforçando minha visão 
                            de uma nutrição que cuida do todo.
                            Com o tempo — e principalmente com o olhar mais sensível da prática hospitalar — percebi o quanto a saúde das
                             pessoas está fragmentada, apressada e distante da essência. Foi essa inquietação que me levou a criar o  <span className="rosa"><a href="">Método 
                             FLORESCER.</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobreMadu;