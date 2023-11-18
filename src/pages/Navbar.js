import { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';
import { ContextData } from "../context/Context";

function Navbar() {
    const { cartBtn, likes, basket } = useContext(ContextData);
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                            <path
                                d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                                fill="white" />
                        </svg>
                        Hello@colorlib.com
                    </Link>
                </li>
                <li>
                    <Link to="/">Free Shipping for all order of $99</Link>
                </li>
                <li>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <g clipPath="url(#clip0_202_14)">
                                <path
                                    d="M15.3633 0H2.63672C1.18295 0 0 1.18295 0 2.63672V15.3633C0 16.817 1.18295 18 2.63672 18H7.94531V11.6367H5.83594V8.47266H7.94531V6.32812C7.94531 4.58336 9.36461 3.16406 11.1094 3.16406H14.3086V6.32812H11.1094V8.47266H14.3086L13.7812 11.6367H11.1094V18H15.3633C16.817 18 18 16.817 18 15.3633V2.63672C18 1.18295 16.817 0 15.3633 0Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_202_14">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <g clipPath="url(#clip0_202_16)">
                                <path
                                    d="M9 0C4.0567 0 0 4.0567 0 9C0 10.6315 0.439865 12.2197 1.274 13.6092L0 18L4.39082 16.726C5.78032 17.5601 7.36853 18 9 18C13.9433 18 18 13.9433 18 9C18 4.0567 13.9433 0 9 0ZM14.6269 12.8028L14.2082 13.2215C13.6158 13.8139 12.2533 13.767 11.3779 13.5979C8.46689 13.0357 5.07307 9.74611 4.41856 6.89735C4.09447 5.48616 4.27341 4.25926 4.74142 3.79111L5.16014 3.37239C5.39127 3.1414 5.76672 3.14168 5.99757 3.37239L7.67271 5.04767C7.7845 5.15945 7.84575 5.30763 7.84575 5.46625C7.84575 5.62486 7.7845 5.77318 7.67271 5.88455L7.25414 6.30368C6.79271 6.7662 6.79271 7.51753 7.25414 7.97896L10.0204 10.7088C10.4832 11.1716 11.2321 11.1721 11.6956 10.7088L12.1143 10.2902C12.3305 10.0728 12.7343 10.0721 12.9522 10.2902L14.6269 11.9649C14.8543 12.1914 14.863 12.5666 14.6269 12.8028Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_202_16">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <g clipPath="url(#clip0_202_18)">
                                <path
                                    d="M15.3633 0H2.63672C1.18295 0 0 1.18295 0 2.63672V15.3633C0 16.817 1.18295 18 2.63672 18H15.3633C16.817 18 18 16.817 18 15.3633V2.63672C18 1.18295 16.817 0 15.3633 0ZM6.36328 14.2734H4.25391V6.89062H6.36328V14.2734ZM6.36328 5.83594H4.25391V3.72656H6.36328V5.83594ZM13.7461 14.2734H11.6367V10.0547C11.6367 9.47324 11.1635 9 10.582 9C10.0006 9 9.52734 9.47324 9.52734 10.0547V14.2734H7.41797V6.89062H9.52734V7.28819C10.08 7.11639 10.4389 6.89062 11.1094 6.89062C12.5399 6.89214 13.7461 8.17548 13.7461 9.69214V14.2734Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_202_18">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <g clipPath="url(#clip0_202_20)">
                                <path
                                    d="M6.71526 16.3843C5.93687 16.3843 5.1357 16.3213 4.32971 16.1949C2.91014 15.9722 1.47313 15.2296 1.0665 15.0073L0 14.4242L1.15466 14.0445C2.41686 13.6295 3.18466 13.372 4.13512 12.9688C3.18343 12.5079 2.44995 11.6789 2.09688 10.6071L1.82826 9.79168L2.04854 9.82533C1.83966 9.6148 1.67473 9.40112 1.54688 9.2068C1.09218 8.51617 0.851441 7.67228 0.902664 6.94911L0.953201 6.23733L1.37933 6.4024C1.19957 6.06292 1.06966 5.70037 0.993302 5.32038C0.807221 4.39369 0.962952 3.40917 1.43193 2.54826L1.80313 1.86683L2.29958 2.46311C3.86966 4.34919 5.85832 5.46801 8.2186 5.79554C8.12219 5.13101 8.19443 4.48968 8.43352 3.91482C8.71188 3.24548 9.20709 2.6779 9.86517 2.27333C10.596 1.82412 11.4824 1.60646 12.3609 1.66043C13.2929 1.71769 14.1391 2.06692 14.8112 2.67103C15.1394 2.58575 15.3813 2.4947 15.7081 2.37165C15.9048 2.29763 16.1278 2.21359 16.4068 2.11746L17.4352 1.76315L16.7646 3.67834C16.8088 3.67463 16.8544 3.67147 16.9021 3.66941L18.0001 3.6197L17.3511 4.50671C17.3139 4.55752 17.3044 4.57194 17.2912 4.59185C17.2389 4.67068 17.1738 4.76873 16.283 5.95828C16.06 6.25614 15.9486 6.6441 15.9693 7.05087C16.0483 8.59664 15.8586 9.9952 15.4053 11.2075C14.9766 12.3545 14.3122 13.3386 13.4308 14.1325C12.3401 15.1147 10.9494 15.7872 9.29704 16.1311C8.48653 16.2997 7.61614 16.3843 6.71526 16.3843Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_202_20">
                                    <rect width="18.0001" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </li>
            </ul>

            <center>
                <aside>
                    <img src="./img/Help.png" alt="logo" />
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_202_33)">
                                <path
                                    d="M11.9 5C9.191 5 7 7.191 7 9.9C7 13.575 11.9 19 11.9 19C11.9 19 16.8 13.575 16.8 9.9C16.8 7.191 14.609 5 11.9 5ZM8.4 9.9C8.4 7.968 9.968 6.4 11.9 6.4C13.832 6.4 15.4 7.968 15.4 9.9C15.4 11.916 13.384 14.933 11.9 16.816C10.444 14.947 8.4 11.895 8.4 9.9Z"
                                    fill="#999999" />
                                <path
                                    d="M11.9004 11.6499C12.8669 11.6499 13.6504 10.8664 13.6504 9.8999C13.6504 8.9334 12.8669 8.1499 11.9004 8.1499C10.9339 8.1499 10.1504 8.9334 10.1504 9.8999C10.1504 10.8664 10.9339 11.6499 11.9004 11.6499Z"
                                    fill="#999999" />
                            </g>
                            <defs>
                                <clipPath id="clip0_202_33">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Gurugram
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_202_39)">
                                <path
                                    d="M14.7166 10L12.2389 12.4723L9.76113 10L9 10.7611L12.2389 14L15.4777 10.7611L14.7166 10Z"
                                    fill="#999999" />
                            </g>
                            <defs>
                                <clipPath id="clip0_202_39">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <div className="search">
                        <label htmlFor="search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <g clipPath="url(#clip0_202_25)">
                                    <path
                                        d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                                        fill="#999999" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_202_25">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </label>
                        <input type="text" name="search" id="search" placeholder="Search for products..." />
                    </div>
                </aside>

                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_202_47)">
                                <path
                                    d="M15 12H17C17 9.24 14.76 7 12 7V9C13.66 9 15 10.34 15 12ZM19 12H21C21 7.03 16.97 3 12 3V5C15.87 5 19 8.13 19 12ZM20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.33 14.9 16.22 14.88 16.12 14.88C15.86 14.88 15.61 14.98 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.98 7.58L5.78 8.79C5.38 7.58 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.4 18.62 15.2 18.21L16.4 17.01C17.25 17.25 18.12 17.4 19 17.46V18.97Z"
                                    fill="#2A2A2A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_202_47">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        1800-000-000
                    </li>
                    <li className="fav_count_parent">
                        <NavLink to={'favourite'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_202_53)">
                                    <path
                                        d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
                                        fill="#2A2A2A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_202_53">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span id="fav_count">{likes.length}</span>
                        </NavLink>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_202_61)">
                                <path
                                    d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z"
                                    fill="#2A2A2A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_202_61">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        John Doe
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_202_65)">
                                <path
                                    d="M14.7166 10L12.2389 12.4723L9.76113 10L9 10.7611L12.2389 14L15.4777 10.7611L14.7166 10Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_202_65">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </li>
                </ul>
            </center>

            <div className="nav_footer">
                <aside>
                    <Link to="#selectCategories" className="select_categories">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_202_71)">
                                <path d="M2 12H14V10.6667H2V12ZM2 8.66667H14V7.33333H2V8.66667ZM2 4V5.33333H14V4H2Z"
                                    fill="#2A2A2A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_202_71">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Select Categories
                    </Link>
                    <ul>
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="product">Product</NavLink></li>
                        <li><NavLink to="stores">Stores</NavLink></li>
                        <li><NavLink to="contact">CONTACT</NavLink></li>
                    </ul>
                </aside>

                <button onClick={cartBtn} className="card_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_202_78)">
                            <path
                                d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
                                fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_202_78">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    CART <span id="cart_count">{basket.length}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_202_81)">
                            <path d="M5.83301 8.33325L9.99967 12.4999L14.1663 8.33325H5.83301Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_202_81">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar