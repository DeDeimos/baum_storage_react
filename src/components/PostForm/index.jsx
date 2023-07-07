import { useState } from "react";
import { InputPost } from "../../UI";

const PostForm = ({create}) => {
    
    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
        // return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
    };


    const [post, setPost] = useState({
        title: "",
        body: "",
        publication_date: new Date(),
        creator: 1,
    });

    const [errMessage, setErrMessage] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        let error = false;
        if(post.title === ""){
            error = true;
            setErrMessage("Пустое поле названия поста");
            return;
        }
        if(post.body === ""){
            error = true;
            setErrMessage("Пустое поле описания поста");
            return;
        }

        fetch("http://localhost:3010/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post)
        }).then((res) => {
            if(res.ok){
                return res.json();
            }
            return res.text().then((error) => {
                throw new Error(error);
            });
        }).then(data => {
            create(data);
            setPost({ title: "", body: "" });
        })
        
    }

    return (
        <form>
            {errMessage && <p style={{color: "red"}}>{errMessage}</p>}
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