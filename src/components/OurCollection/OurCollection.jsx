import CardCollection from './CardCollection/CardCollection';
import style from './OurCollection.module.css';
import nikeNocta from '../assets/nikeNocta.png';
import nike2002 from '../assets/2002.png';
import bolsaNike from '../assets/bolsaNikee.png';
import nikeForce from '../assets/nikeForce.png';
import total90 from '../assets/total90zoom.png';
import blusaNike from '../assets/nikeswoosh.png';

function OurColletion(){
    return(
        <div className={style.collectionContainer}>
            <CardCollection
            imgSneaker={nikeNocta}
            alt={"Sneaker nike nocta"}
            sneakerTitle={"NOCTA x Nike Glide Black & White"} 
            sneakerStyle={"Casual"}
            sneakerPrice={"150,00 R$"}
            ></CardCollection>

            <CardCollection
            imgSneaker={nikeForce}
            alt={"Sneaker nike nocta"}
            sneakerTitle={"Tênis Nike Air Force 1 07 Masculino"} 
            sneakerStyle={"Casual"}
            sneakerPrice={"150,00 R$"}
            ></CardCollection>

            <CardCollection
            imgSneaker={nike2002}
            alt={"Nike Brazil Fifa world Cup 2002 Tshirt"}
            sneakerTitle={"Camisa Nike Brasil 2002 Masculina (World cup 2002)"}
            sneakerStyle={"SportWear"}
            sneakerPrice={"450,00 R$"}
            ></CardCollection>

            <CardCollection
            imgSneaker={bolsaNike}
            alt={"Bag shoulder nike"}
            sneakerTitle={"Bolsa Nike Essentials Crossbody"}
            sneakerStyle={"SportWear"}
            sneakerPrice={"189,00 R$"}
            ></CardCollection>

            <CardCollection
            imgSneaker={total90}
            alt={"Soccer boots total 90"}
            sneakerTitle={"Chuteira Total 90 Air Zoom"}
            sneakerStyle={"Futebol"}
            sneakerPrice={"429,90 R$"}
            ></CardCollection>

            <CardCollection
            imgSneaker={blusaNike}
            alt={"Coat nike swoosh"}
            sneakerTitle={"Blusa Nike Sportwear Swoosh"}
            sneakerStyle={"SportWear"}
            sneakerPrice={"449,00 R$"}
            ></CardCollection>


        </div>
    );
}
export default OurColletion;