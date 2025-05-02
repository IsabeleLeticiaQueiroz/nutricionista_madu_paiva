import { useState } from 'react';

const HeaderMadu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header-madu">
            <nav className="nav-madu">
                <div className="logo">
                    <img src="/imgs/logo.png" alt="Logo Maria Eduarda Nutricionista" />
                </div>
                
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src="/imgs/hamburguer-verde.svg" alt="Abrir menu" />
                </button>

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#footer">Contatos</a></li>
                    <li><a href="#anuncio">Método Florescer</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderMadu;
