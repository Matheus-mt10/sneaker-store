import AirmaxPlus700x700 from "../assets/AirmaxPlus700x700.png";
import DefaultButton from "../DafaultButton/DefaulButton";
import style from '../Hero/Hero.module.css';

function Hero() {
    return(
       <div className={style.heroContainer}>
        <div className={style.heroTextBox}>
            <h2 className={style.heroTitle}>Find Your Dream Sneakers</h2>
            <p className={style.heroText}>Find youus shoes  from our  various collections. Hero  shoes are  endies and profit is also endsless</p>
            <img className={style.heroImg} src={AirmaxPlus700x700} alt="Nike Air max Plus"/>
            <DefaultButton
                textButton="Explore More"
            ></DefaultButton>
            
        </div>
       </div>

    );
}

export default Hero;