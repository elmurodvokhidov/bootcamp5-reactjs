import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateArticle() {
    const [article, setArticle] = useState();
    const navigate = useNavigate();

    function getArticleVal(e) {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        })
    };

    async function handleCreate(e) {
        e.preventDefault();
        try {
            await axios.post("https://api.realworld.io/api/articles", { article });
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
                    <input onChange={(e) => getArticleVal(e)} required name="title" type="text" className="form-control" id="floatingInput" placeholder="..." />
                    <label htmlFor="floatingInput">Title</label>
                </div>
                <div className="form-floating">
                    <input onChange={(e) => getArticleVal(e)} required name="description" type="text" className="form-control" id="floatingEmail" placeholder="..." />
                    <label htmlFor="floatingEmail">Description</label>
                </div>
                <div className="form-floating">
                    <input onChange={(e) => getArticleVal(e)} required name="body" type="text" className="form-control" id="floatingPassword" placeholder="..." />
                    <label htmlFor="floatingPassword">Body</label>
                </div>

                <button className="btn btn-dark w-100 py-3">Create</button>
            </form>
        </div>
    )
}

export default CreateArticle