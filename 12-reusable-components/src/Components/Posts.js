import { useEffect, useState } from 'react';
import Post from './Post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function Posts() {
  const [posts, setPost] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Простой пример
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((json) => setPost(json))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  // Через обычную асинхронную функцию
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(API_URL);
  //       const posts = await res.json();
  //       setPost(posts);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setIsLoading(false);
  //   }
  //   fetchData();
  // }, []);

  // Через стрелочную асинхронную функцию
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(API_URL);
  //       const posts = await res.json();
  //       setPost(posts);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // Через IIFE - Interdiately Invoked Function Expression
  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPost(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="posts">
      <h1>Posts</h1>
      <div className="posts__inner">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          posts.map((post) => {
            return <Post {...post} key={post.id} />;
          })
        )}
      </div>
    </div>
  );
}
