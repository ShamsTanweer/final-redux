import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>
            {post.body.slice(0, 100)}
            {post.body.length > 100 && "..."}{" "}
            <Link to={`/item/${post.id}`}>Read More</Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
