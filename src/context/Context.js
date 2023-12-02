import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AllProducts from '../tools/AllProducts';
import Swal from 'sweetalert2';

export const ContextData = React.createContext();


function ContextFunction({ children }) {
    const [categoriesData, setCategoriesData] = useState([
        {
            id: 1,
            img: "./img/305295 1.svg",
            title: "Vegetables & Fruits",
        },
        {
            id: 2,
            img: "./img/shopping-cart 1.svg",
            title: "Grocery & Staples",
        },
        {
            id: 3,
            img: "./img/milk 1.svg",
            title: "Dairy & Eggs",
        },
        {
            id: 4,
            img: "./img/groceries 1.svg",
            title: "Beverages",
        },
        {
            id: 5,
            img: "./img/305305 11.svg",
            title: "Snacks",
        },
        {
            id: 6,
            img: "./img/house 1.svg",
            title: "Home Care",
        },
        {
            id: 7,
            img: "./img/milk 1.svg",
            title: "Dairy & Eggs",
        },
        {
            id: 8,
            img: "./img/305305 11.svg",
            title: "Snacks",
        },
    ]);

    // LocalStorage-dagi barcha mahsulotlar
    const [allProducts, setAllProducts] = useState(
        AllProducts() ? JSON.parse(localStorage.getItem('allProducts')) : []
    );

    function allProductsRefresh() {
        setAllProducts(
            localStorage.getItem('allProducts') ? JSON.parse(localStorage.getItem('allProducts')) : []
        );
    };

    // Like page-dagi barcha mahsulotlar
    const [likes, setLikes] = useState(
        localStorage.getItem('likes') ? JSON.parse(localStorage.getItem('likes')) : []
    );

    function likeRefresh() {
        setLikes(
            localStorage.getItem('likes') ? JSON.parse(localStorage.getItem('likes')) : []
        );
    };

    // Basket page-dagi barcha mahsulotlar
    const [basket, setBasket] = useState(
        localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
    );

    function basketRefresh() {
        setBasket(
            localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
        );
    };

    const cartNavigate = useNavigate();

    // Cart function
    function cartBtn() {
        cartNavigate('cart');
    };

    // category filter state
    const [category, setCategory] = useState(0);

    // price filter state
    const [price, setPrice] = useState('0-0');

    // search state
    const [search, setSearch] = useState('');

    // get window location
    const location = useLocation();

    // validation state
    const [valInput, setValInput] = useState({
        username: '',
        password: '',
    });

    // Like function
    function likeFun(item) {
        if ((likes.filter(element => element.id === item.id)).length === 0) {
            if (localStorage.getItem('likes')) {
                localStorage.setItem('likes', JSON.stringify([
                    ...JSON.parse(localStorage.getItem('likes')), item
                ]))
            } else {
                localStorage.setItem('likes', JSON.stringify([item]))
            }
        }
        else {
            localStorage.setItem('likes', JSON.stringify(
                JSON.parse(localStorage.getItem('likes')).filter(element => element.id !== item.id)
            ));
        }
        likeRefresh();
    };

    // Increment function
    function increment(id) {
        if (location.pathname === '/' || location.pathname === '/product' || location.pathname === '/stores') {
            localStorage.setItem('allProducts', JSON.stringify(
                JSON.parse(localStorage.getItem('allProducts')).map(element => element.id === id && element.status ? { ...element, count: element.count + 1 } : element)
            ));
            allProductsRefresh();
        }
        else if (location.pathname === '/cart') {
            localStorage.setItem('basket', JSON.stringify(
                JSON.parse(localStorage.getItem('basket')).map(element => element.id === id && element.status ? { ...element, count: element.count + 1 } : element)
            ));
            basketRefresh();
        }
    };

    // Decrement function
    function decrement(id) {
        localStorage.setItem('allProducts', JSON.stringify(
            JSON.parse(localStorage.getItem('allProducts')).map(element => element.id === id && element.status && element.count > 0 ? { ...element, count: element.count - 1 } : element)
        ));
        allProductsRefresh();
    };

    // Basket function
    function basketFun(item) {
        if ((basket.filter(element => element.id === item.id)).length === 0) {
            if (item.status) {
                if (localStorage.getItem('basket')) {
                    localStorage.setItem('basket', JSON.stringify([
                        ...JSON.parse(localStorage.getItem('basket')), item
                    ]))
                } else {
                    localStorage.setItem('basket', JSON.stringify([item]))
                }
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                basketRefresh();
            }
        }
        else {
            Swal.fire({
                icon: "warning",
                title: "Ushbu mahsulot allaqachon mavjud!",
                showConfirmButton: false,
                timer: 2000,
            });
        }
    };

    // Delete item from basket
    function deleteToBasket(item) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // delete function
                localStorage.setItem('basket', JSON.stringify(
                    JSON.parse(localStorage.getItem('basket')).filter(element => element.id !== item.id)
                ))
                basketRefresh();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <ContextData.Provider value={{
            cartBtn,
            categoriesData,
            setCategoriesData,
            allProducts,
            setAllProducts,
            likes,
            likeFun,
            increment,
            decrement,
            basketFun,
            basket,
            category,
            setCategory,
            search,
            setSearch,
            price,
            setPrice,
            location,
            deleteToBasket,
            valInput,
            setValInput,
        }}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextFunction