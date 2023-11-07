import Image from './Image';
import CardInfo from './CardInfo';

function Card(value) {
    let name = value.name;
    let image = value.image;
    let about = value.about;

    return (
        <div className="card">
           <Image image={image} name={name} />
           <CardInfo name={name} about={about} />
        </div>
    )
};

export default Card;