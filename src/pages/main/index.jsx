import { useState, useEffect } from 'react';
import { usePosts } from '../../hooks/usePosts';
import { Loader } from '../../UI';
import { useFetching } from '../../hooks/useFetching';
import { PostFilter, PostForm, PostList } from '../../components';


function Main() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({
        sort: "",
        query: ""
    });

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    //   const [isPostLoading, setIsPostLoading] = useState(false);
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        fetch("http://localhost:3010/api/posts", {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return res.text().then((error) => {
                throw new Error(error);
            });
        }).then(data => {
            setPosts(data);
            console.log(posts);
            console.log("Посты отгружены");
        })
    });

    let flag = true;

    useEffect(() => {
        fetchPosts();
    }, [flag]);

    useEffect(() => {

    })

    const createPost = (newPost) => {
        setPosts([newPost, ...posts]);
        //костылечек
        flag = !flag;
    }

    function removePost(post) {
        // e.preventDefault();
        console.log(post);
        fetch("http://localhost:3010/api/post", {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: post.id
            })
        }).then(response => {
            console.log(response);
            console.log(posts);
            let filtred_posts = posts.filter(p => p.id !== post.id);
            console.log(filtred_posts); 
            setPosts(filtred_posts);
            // setFilter({...filter, query: ""})
            console.log(sortedAndSearchedPosts);
        }
        );

    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {isPostLoading
                ? <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}><Loader /></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
            }
        </div>
    );
}

export { Main };
