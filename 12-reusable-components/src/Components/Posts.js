import { useEffect, useState } from 'react';
import Post from './Post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function Posts() {
  const [posts, setPost] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setPost(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
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
