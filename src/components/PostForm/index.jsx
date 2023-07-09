import { useState } from "react";
import { AddButton, InputPost } from "../../UI";

const PostForm = ({ create }) => {


    const creator = localStorage.getItem("nickname");
    const id = localStorage.getItem("id");

    const [post, setPost] = useState({
        title: "",
        body: "",
        publication_date: "",
        creator: id,
    });

    const [errMessage, setErrMessage] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        setPost({ ...post, publication_date: new Date() });
        console.log(post);
        let error = false;
        if (post.title === "") {
            error = true;
            setErrMessage("Пустое поле названия поста");
            return;
        }
        if (post.body === "") {
            error = true;
            setErrMessage("Пустое поле описания поста");
            return;
        }

        fetch("http://localhost:3010/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...post, publication_date: new Date() })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return res.text().then((error) => {
                throw new Error(error);
            });
        }).then(data => {
            console.log(data);
            create({ title: data.title, body: data.body, publication_date: data.publication_date, creator: creator });
            setPost({ ...post, title: "", body: "" });
        })

    }

    function auto_height(elem) {  /* javascript */
        elem.style.height = "1px";
        elem.style.height = (elem.scrollHeight) + "px";
    }

    return (
        <form>
            {errMessage && <p style={{ color: "red" }}>{errMessage}</p>}
            <InputPost
                type="text"
                placeholder='Название поста'
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            {/* <InputPost
                type="text"
                placeholder='Описание поста'
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            /> */}
            {/* <textarea rows="1" className="auto_height" onInput={auto_height}></textarea> */}
            <textarea
                rows="1"
                placeholder='Описание поста'
                value={post.body}
                className="auto_height"
                onInput={(e) => auto_height(e.target)}
                onChange={e => setPost({ ...post, body: e.target.value })}
            ></textarea>
            <div style={{ alignItems: "end", display: "flex", justifyContent: "flex-end" }}><AddButton onClick={addNewPost} /></div>
        </form>
    );
}

export { PostForm }