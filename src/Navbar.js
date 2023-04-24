import './css/bootstrap-icons.css';
import './css/bootstrap.min.css';
import './css/index.css';
import './css/styles.css';
import logo from './images/LSAC-logo-dark.png'

function Navbar() {
  return (
    
        <nav class="navbar navbar-expand-md navbar-dark fixed-top">                
                <div class="container"> 
                    <a class="navbar-brand d-flex align-items-center" href="https://www.lsaciasi.ro/">
                        <img src={logo} class="navbar-brand-image img-fluid" alt="LSAC LOGO"></img>
                        <span class="navbar-brand-text">
                            Liga Studenților
                            <small>Facultății de automatică și calculatoare iași</small>
                        </span>
                    </a>
    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-lg-auto">
                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_1">Acasa</a>
                            </li>
    
                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_2">Despre</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_4">Eveniment</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_5">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
  );
}

export default Navbar;
