import React from "react";
import { useParams } from "react-router-dom";
import ParallaxPage from "../ParallaxPage";

const BlogDetail = () => {
  const { id } = useParams();

  if (id === "1") {
    return <ParallaxPage />; // Only for blog 1
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Blog #{id}</h2>
      <p>This is a placeholder for blog detail page.</p>
    </div>
  );
};

export default BlogDetail;