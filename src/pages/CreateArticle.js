import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateArticle() {
    const store = useSelector(state => state.articles);
    const gettedArticle = store.article;
    const [article, setArticle] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (gettedArticle) {
            setArticle(gettedArticle);
        }
    }, [gettedArticle]);

    function getArticleVal(e) {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        });
    };

    async function handleCreate(e) {
        e.preventDefault();
        try {
            if (gettedArticle) {
                await axios.put(`https://api.realworld.io/api/articles/${gettedArticle.slug}`, { article });
            }
            else {
                await axios.post("https://api.realworld.io/api/articles", { article });
            }
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="row justify-content-center align-items-center vh-100">
            <form onSubmit={(e) => handleCreate(e)} className="col-4 d-flex flex-column gap-3">
                <h1 className="text-center">Create a new article</h1>
                <div className="form-floating">
                    <input value={article?.title} onChange={(e) => getArticleVal(e)} required name="title" type="text" className="form-control" id="floatingInput" placeholder="..." />
                    <label htmlFor="floatingInput">Title</label>
                </div>
                <div className="form-floating">
                    <input value={article?.description} onChange={(e) => getArticleVal(e)} required name="description" type="text" className="form-control" id="floatingEmail" placeholder="..." />
                    <label htmlFor="floatingEmail">Description</label>
                </div>
                <div className="form-floating">
                    <input value={article?.body} onChange={(e) => getArticleVal(e)} required name="body" type="text" className="form-control" id="floatingPassword" placeholder="..." />
                    <label htmlFor="floatingPassword">Body</label>
                </div>

                <button className="btn btn-dark w-100 py-3">Create</button>
            </form>
        </div>
    )
}

export default CreateArticle