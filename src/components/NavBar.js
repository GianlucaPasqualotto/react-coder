import "./NavBar.css";
import img from "../imagenes/rapidLubeService-banerPng.png"

function NavBar () {
    return(
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={ img } />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#"></a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link colorVailote" aria-current="page" href="#">Aceites</a>
                </li>
                <li class="nav-item">
                <a class="nav-link colorVailote" aria-current="page" href="#">Filtros</a>
                </li>
                <li class="nav-item">
                <a class="nav-link colorVailote" aria-current="page" href="#">Baterías</a>
                </li>
                <li class="nav-item">
                <a class="nav-link colorVailote" aria-current="page" href="#">Lámparas</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">🔎</button>
            </form>
            </div>
        </div>
        </nav>
    )
}
export default NavBar;