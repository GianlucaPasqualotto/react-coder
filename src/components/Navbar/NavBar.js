import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from "react-router-dom";


export const NavBar = () => {
    return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to={"/"}>
                <img src="./../../../assets/img/rapidLubeService-banerPng.png"  alt="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/"> 
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to={`/category/Aceites`} className="nav-link colorVailote" aria-current="page">Aceites</Link>
                </li>
                <li className="nav-item">
                <Link to={`/category/Filtros`} className="nav-link colorVailote" aria-current="page">Filtros</Link>
                </li>
                <li className="nav-item">
                <Link to={`/category/Baterías`} className="nav-link colorVailote" aria-current="page">Baterías</Link>
                </li>
                <li className="nav-item">
                <Link to={`/category/Lámparas`} className="nav-link colorVailote" aria-current="page">Lámparas</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button className="btn me-3" type="submit">🔎</button>
            </form>
            <CartWidget />
            </div>
            </div>
        </nav>
    )
}