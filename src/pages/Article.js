import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getArticle } from "../slices/articleslice";

function Article() {
    const { article } = useSelector(state => state.articles);
    const dispatch = useDispatch();
    const { slug } = useParams();

    useEffect(() => {
        async function getArticleInformation() {
            const { data } = await axios.get(`https://api.realworld.io/api/articles/${slug}`);
            dispatch(getArticle(data.article));
        };

        getArticleInformation();
    }, []);

    return (
        <div><h1>{article ? article.title : "Loading..."}</h1></div>
    )
}

export default Article