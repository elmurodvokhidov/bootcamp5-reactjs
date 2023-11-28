import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useContext } from "react";
import { ContextData } from "../context/Context";
import { ImBin } from "react-icons/im";

function GlobalCard({ item, spacialID }) {
    const { likeFun, likes, increment, decrement, basketFun, location, deleteToBasket } = useContext(ContextData);


    return (
        <div id={spacialID} className="globalSliderCard globalCard">
            <div className="actionStatus">
                <h3>{item.discount}% Off</h3>
                <button onClick={() => likeFun(item)} className="favBtn">{likes.filter(element => element.id === item.id).length === 0 ? <MdFavoriteBorder /> : <MdOutlineFavorite />}</button>
            </div>
            <img src={item.img} alt={item.title} />
            <div className="cardStatus">
                <h4 style={item.status ? { color: '#A9A9A9' } : { color: 'red' }} id="stock">{item.status ? "Available(in stock)" : "Unavailable(in stock)"}</h4>
                <h3>{item.title.length > 15 ? item.title.slice(0, 15) + '...' : item.title}</h3>
                <h2>${Math.round(item.price - ((item.price / 100) * item.discount))} <span>${item.price}</span></h2>
            </div>
            <div className="cardFooter">
                <div className="cardBtnGroup" id={item.status ? null : 'disabled'}>
                    <button onClick={() => decrement(item.id)}><AiOutlineMinus /></button>
                    <span>{item.status ? item.count + 1 : item.count}</span>
                    <button onClick={() => increment(item.id)}><AiOutlinePlus /></button>
                </div>
                <button onClick={() => location.pathname === '/cart' ? deleteToBasket(item) : basketFun(item)} className="cartBtn">
                    {
                        location.pathname === '/cart' ? <ImBin className='bin' /> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_202_324)">
                                <path d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="#A9A9A9" />
                            </g>
                            <defs>
                                <clipPath id="clip0_202_324">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    }
                </button>
            </div>
        </div>
    )
};

export default GlobalCard;