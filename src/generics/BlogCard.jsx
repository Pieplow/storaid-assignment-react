import React from "react";
import "./BlogCard.css";
import CalendarIcon from "../assets/calender-icon.svg";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card rounded-3 shadow-sm overflow-hidden h-100 d-flex flex-column">
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
      <div className="blog-content p-4 d-flex flex-column flex-grow-1">
        {/* Date */}
        <div className="blog-date d-flex align-items-center mb-3">
          <img
            src={CalendarIcon}
            alt="calendar icon"
            className="calendar-icon me-2"
          />
          <span>
            {blog.created
              ? new Date(blog.created + "Z").toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </span>
        </div>

        {/* Title + description */}
        <div className="flex-grow-1">
          <h5 className="blog-title color-white fw-semibold mb-2">{blog.title}</h5>
          <p className="blog-description">
            {blog.description.length > 120
              ? blog.description.slice(0, 120) + "..."
              : blog.description}
          </p>
        </div>

        {/* Read more */}
        <a href="/404" className="read-more-btn mt-3">
          Read more →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
