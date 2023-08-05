import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions/actions";
import ItemCard from "./ItemCard";
import * as Loader from "react-loader-spinner";

const Post = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{ textAlign: "center" }}>
        <Loader.Rings color="#F31559" height={150} width={150} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      {posts.map((post) => (
        <ItemCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.body}
          imageUrl={`https://picsum.photos/200?random=${post.id}`}
        />
      ))}
    </div>
  );
};

export default Post;
