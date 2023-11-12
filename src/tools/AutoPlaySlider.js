import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";

function AutoPlaySlider() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };

    return (
        <div className="sliderParent">
            <Slider {...settings}>
                <div>
                    <SliderCard img={"./img/Rectangle 71.png"}
                        discount={"10% OFF"}
                        text={"Buy More & Save More"}
                        title={"Nuts & Snacks"}
                    />
                </div>
                <div>
                    <SliderCard img={"./img/Rectangle 7.png"}
                        discount={"6% OFF"}
                        text={"Buy More & Save More"}
                        title={"Fresh Vegetables"}
                    />
                </div>
                <div>
                    <SliderCard img={"./img/Rectangle 7 (1).png"}
                        discount={"25% OFF"}
                        text={"Buy More & Save More"}
                        title={"Fresh Fruits"}
                    />
                </div>
                <div>
                    <SliderCard img={"./img/Rectangle 71.png"}
                        discount={"6% OFF"}
                        text={"Buy More & Save More"}
                        title={"Bevarage"}
                    />
                </div>
                <div>
                    <SliderCard img={"./img/Rectangle 7.png"}
                        discount={"15% OFF"}
                        text={"Buy More & Save More"}
                        title={"Eggs & Dairy"}
                    />
                </div>
                <div>
                    <SliderCard img={"./img/Rectangle 7 (1).png"}
                        discount={"25% OFF"}
                        text={"Buy More & Save More"}
                        title={"Fresh Fruits"}
                    />
                </div>
            </Slider>
        </div>
    )
}

export default AutoPlaySlider