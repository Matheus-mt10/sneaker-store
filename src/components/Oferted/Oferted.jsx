import style from '../Oferted/Oferted.module.css';
import CardOferted from './Card/CardOferted';
import imgSecure from '../assets/payment.png';
import imgDelivery from '../assets/delivery.png';

function Oferted() {
    return(

        <div className={style.ofertedContainer}>
            <CardOferted
            imgCard={imgSecure}
            alt={"Payment ico"}
            cardTitle={"Secure Payment"}
            cardText={"Secure on"}
            ></CardOferted>

            <CardOferted
            imgCard={imgDelivery}
            alt={"Fast Delivery"}
            cardTitle={"Fast Delivery"}
            cardText={"Fast Delivery on order"}
            ></CardOferted>
        </div>
    );
}

export default Oferted;