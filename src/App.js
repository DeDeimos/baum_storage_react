import { useState, useMemo, useEffect } from 'react';
import './App.css';
import { PostFilter, PostForm, PostList } from './components';


function App() {

  const [posts, setPosts] = useState([]);



  const [filter, setFilter] = useState({
    sort: "",
    query: ""
  })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts]);

  let flag = true;

  useEffect(() => {
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
      console.log("Посты отгружены")
    })
  }, [flag]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    //костылечек
    flag = !flag;
  }

  const removePost = (post) => {
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
      return response.json();
    }).then(setPosts(posts.filter(p => p.id !== post.id)));
    
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
    </div>
  );
}

export default App;
