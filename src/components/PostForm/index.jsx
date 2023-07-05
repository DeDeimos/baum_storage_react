import { useState } from "react";
import { InputPost } from "../../UI";

const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title: "",
        body: ""
    })

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = { ...post, id: Date.now()}
        create(newPost);
        setPost({ title: "", body: "" })
    }

    return (
        <form>
            <InputPost
                type="text"
                placeholder='Название поста'
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <InputPost
                type="text"
                placeholder='Описание поста'
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            <button onClick={addNewPost}>Создать пост</button>
        </form>
    );
}

export{PostForm}