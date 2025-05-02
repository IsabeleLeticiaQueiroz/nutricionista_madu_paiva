import { useState } from 'react';

const HeaderFlo = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header-flo">
            <nav className="nav-flo">
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src="/imgs/hamburguer-verde.svg" alt="Abrir menu" />
                </button>

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#pontos">Principais</a></li>
                    <li><a href="#adquira" className="rosinha">Adquira já</a></li>
                </ul>
            </nav>
            <div className="row-logo-flo">
                <img src="/imgs/logo-florescer-svg.svg" alt="" />
            </div>
        </header>
    );
};

export default HeaderFlo;
