import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ id, title, description, imageUrl }) => {
  const truncatedTitle = title.length > 30 ? title.slice(0, 30) + "..." : title;
  const truncatedDescription = description.slice(0, 100);
  const showReadMore = description.length > 100;

  return (
    <Link
      to={`/item/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
          maxWidth: "220px",
        }}
      >
        <h2>{truncatedTitle}</h2>
        <img
          src={imageUrl}
          alt="Post"
          style={{ maxWidth: "100%", marginBottom: "10px" }}
        />
        <p>{showReadMore ? truncatedDescription + "..." : description}</p>
        {showReadMore && <Link to={`/item/${id}`}>Read More...</Link>}
      </div>
    </Link>
  );
};

export default ItemCard;
