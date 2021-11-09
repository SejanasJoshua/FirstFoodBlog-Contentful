import React from "react";
import ReactMarkdown from "react-markdown";

const Post = ({ article }) => {
  const { name, featuredImage, description } = article.fields;
  return (
    <div className="post">
      <h2 className="title">{name}</h2>
      {featuredImage && (
        <img
          className="featuredImage"
          src={featuredImage.fields.file.url}
          alt={name}
          title={name}
        />
      )}
      <section>
        <ReactMarkdown>{description}</ReactMarkdown>
      </section>
    </div>
  );
};

export default Post;
