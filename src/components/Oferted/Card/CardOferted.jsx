import style from './CardOferted.module.css';
function CardOferted({imgCard, alt, cardTitle, cardText}) {
    return(
        <div className={style.cardOferted}>
            <div className={style.imgBackground}>
                <img className={style.imgCard} src={imgCard} alt={alt} />
            </div>
            <div className={style.cardContent}>
                <h2 className={style.cardTitle}>{cardTitle}</h2>
                <p className={style.cardText}>{cardText}</p>
            </div>
        </div>
    );
}
export default CardOferted;