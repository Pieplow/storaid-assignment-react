import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card bg-white rounded-3 shadow-sm overflow-hidden h-100">
      {/* Blog image */}
      <div className="blog-image-wrapper">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="blog-image w-100"
          loading="lazy"
        />
      </div>

      {/* Blog content */}
      <div className="p-4 d-flex flex-column justify-content-between h-100">
        <div>
          <h5 className="blog-title fw-bold text-dark mb-3">{blog.title}</h5>
          <p className="blog-description text-secondary">
            {blog.description.length > 140
              ? blog.description.slice(0, 140) + "..."
              : blog.description}
          </p>
        </div>

        <small className="text-muted mt-3">
          {new Date(blog.created).toLocaleDateString("sv-SE", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </small>
      </div>
    </div>
  );
};

export default BlogCard;