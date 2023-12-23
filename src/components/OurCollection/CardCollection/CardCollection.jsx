import style from './dist/CardCollection.module.css';

function CardCollection({imgSneaker, alt, sneakerTitle, sneakerStyle,sneakerPrice}) {
    return(

        <div className={style.collectionCard}>
            <img className={style.imgSneaker} src={imgSneaker} alt={alt} />
            <div className={style.cardContent}>
                <h2 className={style.sneakerTitle}>{sneakerTitle}</h2>
                <p className={style.sneakerStyle}>{sneakerStyle}</p>
                <p className={style.sneakerPrice}>{sneakerPrice}</p>
            </div>
        </div>

    );
}

export default CardCollection;