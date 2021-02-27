import React from 'react';

const Index =() => {

    return (
        <>
            <div className="text-info">
                <div className="container">
                    <h1 className="text-warning">Filme Estrelas Além do Tempo</h1>
                    <p>Conheça mais sobre este filme baseado em uma história real!</p>
                </div>
            </div>

            <div className="container">

            <h2 className="text-warning">A corrida espacial...</h2>

                <div>
                    <div className="text-info">
                        <p>No auge da corrida espacial travada entre Estados Unidos e Rússia durante a Guerra Fria, uma equipe de cientistas da NASA, 
                        formada exclusivamente por mulheres afro-americanas, provou ser o elemento crucial que faltava na equação para a vitória dos 
                        Estados Unidos, liderando uma das maiores operações tecnológicas registradas na história americana e se tornando verdadeiras 
                        heroínas da nação.</p>
                    </div>

                    <div>
                        <h3 className="text-warning">Estrelas desta história: </h3>
                        <ul className="text-info">
                            <li>Katherine Johnson</li>
                            <li>Dorothy Vaughan</li>
                            <li>Mary Jackson</li> 
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Index;