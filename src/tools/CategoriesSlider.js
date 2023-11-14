import { useContext } from "react";
import Slider from "react-slick";
import { ContextData } from "../context/Context";

function CategoriesSlider() {
    const { categoriesData } = useContext(ContextData);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <div className="categoriesSlider sliderParent">
            <h2 className="smallText">Shop By</h2>
            <h1 className="bigText">Categories</h1>
            <Slider {...settings}>
                {
                    categoriesData.map(item => (
                        <div key={item.id}>
                            <div className="categoriesSliderCard">
                                <img src={item.img} alt={item.title} />
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default CategoriesSlider