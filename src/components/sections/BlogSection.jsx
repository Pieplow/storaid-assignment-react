import React, { useState, useEffect } from "react";
import { getBlogs } from "../../services/api";
import SectionText from "../../generics/SectionText";
import BlogCard from "../../generics/BlogCard";
import "./BlogSection.css";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        console.error("Error loading blogs:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="blog-section py-5">
      <div className="container">
       

        {/* Why Choose Us text block */}
        <div className="container">
          <div className="row mb-5 align-items-start">
            <div className="col-md-6">
              <SectionText
                label="Latest Blogs and News"
                title="Check Out Our Latest Blog and News Update"
              text=""
                
              />
            </div>
            <div className="col-md-6">
              <p className="mt-5">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.              </p>
            </div>
          </div>
        </div>

        {/* Blog cards */}
        <div className="row g-4 justify-content-center">
          {blogs.length > 0 ? (
            blogs.slice(0, 3).map((blog) => (
              <div className="col-md-4 col-sm-6" key={blog.id}>
                <BlogCard blog={blog} />
              </div>
            ))
          ) : (
            <p className="text-center text-muted">Loading blogs...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
