import logo from '../../assets/img/logo.svg';

import'./styles.css'; 

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>RCTecnologia</h1>  
                <p>
                    Desenvolvido por
                    <a href="https://instagram.com/ronaldo_developer"> @RonaldoCesar</a>
                </p>
            </div>
        </header>
    )
}

export default Header;  