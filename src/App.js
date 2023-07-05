import { useState, useMemo } from 'react';
import './App.css';
import { PostFilter, PostForm, PostList } from './components';


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Title 1", body: "Body 1" },
    { id: 2, title: "Title 2", body: "Body 2" },
    { id: 3, title: "Title 3", body: "Body 3" },
  ])

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
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
    </div>
  );
}

export default App;
