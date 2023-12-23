import style from './Header.module.css';
import logo from '../assets/nikeBrand.png';
import favorite from '../assets/favorite.png';
import menu from '../assets/menu.png';
import bag  from '../assets/bag.png';
import search from '../assets/search.png';


function Header() {
    return(
        <>
        <header>
            <nav className={style.navigationItens}>
                <div className={style.brandBox}>
                    <a href="#"><img className={style.logoHeader} src={logo} alt="Nike Logo" /></a>
                </div>
                <div className={style.navBoxIcon}>
                    <a href="#"><img className={style.navIcons} src={favorite} alt="favorite icon" /></a>
                    <a href="#"><img className={style.navIcons} src={bag} alt="icon bag" /></a>
                    <a href="#"><img className={style.navIcons} src={menu} alt="Menu icon" /></a>
                </div>
            </nav>

            <div className={style.searchBar}>
                <img  className={style.lupa} src={search} alt="Lupa" />
                <input  className={style.inputSearchHome} placeholder='Buscar' type="search" name="" id="search"/>
            </div>
        </header>
        
        </>
    );
}

export default Header;

