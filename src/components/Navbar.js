import { AiOutlineSearch } from "react-icons/ai";
import { GeneralBtn } from "../tools/Tools";

function Navbar() {
    return (
        <div className="navbar">
            <ul className="top">
                <li><a href="#">Доставка</a></li>
                <li><a href="#">Оплата</a></li>
                <li><a href="#">Отзывы</a></li>
                <li><a href="#">Вопрос - ответ</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>

            <div className="main">
                <div className="logo">
                    <img src="./img/logo.png" alt="logo" />
                    <h1>BEAUTY</h1>
                </div>

                <div className="search">
                    <span><AiOutlineSearch /></span>
                    <input type="text" name="search" id="search" />
                </div>

                <GeneralBtn btnBorderColor={'red'} text={'Обратный звонок'} />
            </div>
        </div>
    )
}

export default Navbar;