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
            <div class="cartWidget">
                    <a href="#top" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg>
                    </a>
            </div>
            </div>
            </div>
        </nav>
    )
}