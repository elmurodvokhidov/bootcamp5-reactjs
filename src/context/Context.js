import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        localStorage.getItem('allProducts') ? JSON.parse(localStorage.getItem('allProducts')) : []
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

    const cartNavigate = useNavigate();

    // Cart function
    function cartBtn() {
        cartNavigate('cart');
    };

    // Like function
    function likeFun(item) {
        if (localStorage.getItem('likes')) {
            localStorage.setItem('likes', JSON.stringify([
                ...JSON.parse(localStorage.getItem('likes')), item
            ]))
        } else {
            localStorage.setItem('likes', JSON.stringify([item]))
        }
        likeRefresh();
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
        }}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextFunction