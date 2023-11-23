import Slider from "react-slick";
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useContext } from "react";
import { ContextData } from "../context/Context";
import GlobalCard from "./GlobalCard";

function GlobalSlider({ smallText, bigText, sliderCard, spacialID }) {
    const { likeFun, likes, increment, basketFun } = useContext(ContextData);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <div className="globalSlider sliderParent">
            <h2 className="smallText">{smallText}</h2>
            <h1 className="bigText">{bigText}</h1>
            <Slider {...settings}>
                {
                    sliderCard.map(item => (
                        <div key={item.id}>
                            <GlobalCard item={item} spacialID={spacialID} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default GlobalSlider