import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';


export const NavBar = () => {
    return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#top">
                <img src="./../../../assets/img/rapidLubeService-banerPng.png"  alt="logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#top"> 
            </a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link colorVailote" aria-current="page" href="#top">Aceites</a>
                </li>
                <li className="nav-item">
                <a className="nav-link colorVailote" aria-current="page" href="#top">Filtros</a>
                </li>
                <li className="nav-item">
                <a className="nav-link colorVailote" aria-current="page" href="#top">Baterías</a>
                </li>
                <li className="nav-item">
                <a className="nav-link colorVailote" aria-current="page" href="#top">Lámparas</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button className="btn me-3" type="submit">🔎</button>
            </form>
            <CardWidget />
            </div>
            </div>
        </nav>
    )
}