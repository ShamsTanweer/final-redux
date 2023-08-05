import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions/actions";
import { useParams } from "react-router-dom";
import * as Loader from "react-loader-spinner";

const ItemDetail = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.posts);
  const { id } = useParams();

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

  const item = posts.find((post) => post.id.toString() === id);

  return (
    <div>
      {item ? (
        <div>
          <img src={`https://picsum.photos/200?random=${item.id}`} alt="Post" />
          <h1>{item.title}</h1>
          <p>{item.body}</p>
          <h4>Created by user ID: {item.userId}</h4>
        </div>
      ) : (
        <div>Item not found!</div>
      )}
    </div>
  );
};

export default ItemDetail;
