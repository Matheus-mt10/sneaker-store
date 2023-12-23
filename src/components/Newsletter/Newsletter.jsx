import style from './Newsletter.module.css';
function Newsletter() {
    return(

        <div className={style.newsletterContainer}>
            <h2 className={style.newsTitle}>Subscribe To Our Newsletter</h2>
            <div className={style.searchBox}>
                <input type="search" className={style.inputSearch} placeholder='Enter Your Email' />
                <button className={style.buttonSearch}> SUBSCRIBE</button>
            </div>
        </div>
    );
}

export default Newsletter;