
function BestValueCard({ title1, title2, img }) {
    return (
        <div className="bestValueCard">
            <img src={img} alt={title1} />
            <div className="bestValueBox">
                <h1>{title1}</h1>
                <h2>{title2}</h2>
                <button className="shopNow">SHOP NOW</button>
            </div>
        </div>
    )
}

export default BestValueCard