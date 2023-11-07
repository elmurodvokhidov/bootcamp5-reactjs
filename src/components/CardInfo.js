function CardInfo(props) {
    return (
        <div className="cardInfo">
            <h1>{props.name}</h1>
            <p>{props.about}</p>
        </div>
    )
};

export default CardInfo;