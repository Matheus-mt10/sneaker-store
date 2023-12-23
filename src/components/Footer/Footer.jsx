import style from './Footer.module.css';
import nikeBrand  from '../assets/nikeBrand.png';
import instaLogo   from '../assets/instalogo-black.png';
import faceLogo from '../assets/facelogo-black.png';
import xLogo from '../assets/twitterlogo-black.png';
import linkedinLogo from '../assets/linkedinlogo-black.png';

function Footer() {
    return(

        <footer>
            <div className={style.contentBox}>

                <div className={style.imgBrandBox}>
                    <a href="#"><img src={nikeBrand} alt="Nike Brand" className={style.imgBrand} /></a>
                </div>

                <div className={style.informations}>

                    <div className={style.aboutBox}>
                        <ul className={style.aboutList}>
                            <h2>About</h2>
                            <li><a href="#">About Us</a></li>
                            <a href="">
                                <li><a href="#">Feature</a>s</li>
                            </a>
                            <li><a href="#">News/Blog</a></li>
                        </ul>
                    </div>

                    <div className={style.supportBox}>
                        <ul className={style.supportList}>
                            <h2>Support</h2>
                            <li><a href="#">SAC</a></li>
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">Connect Us</a></li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className={style.socialMedias}>
                <h2 className={style.socialTitle}>Social Medias</h2>
                <div className={style.mediasBrand}>
                    <a href="#"><img  className={style.brandsLogo} src={instaLogo} alt="Instagram logo" /></a>
                    <a href="#"><img  className={style.brandsLogo} src={faceLogo} alt="Facebook Logo" /></a>
                    <a href="#"><img  className={style.brandsLogo} src={xLogo} alt="X logo"/></a>
                    <a href="#"><img  className={style.brandsLogo} src={linkedinLogo} alt="Linkedin Logo" /></a>
                </div>
            </div>

            <div className={style.designBy}>
                <h2 className="designName">Design by Matheus Santana</h2>
            </div>
        </footer>


    );

}

export default Footer;