import style from '../DafaultButton/dist/DefaultButton.module.css';

function DefaultButton({textButton}) {
    return(
        <div className={style.button}>
            <p>{textButton}</p>
        </div>
    );
}

export default DefaultButton;