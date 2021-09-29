import React from "react";
import Title from "../../Components/Title/Title";
import blogs from "../../data/blogs";
import { MainLayout, InnerLayout } from "../../styles/Layout";
import { BlogPageStyled } from "./BlogsElm";

function Blogs() {
  return (
    <MainLayout>
      <BlogPageStyled>
        <Title title="Blogs" span="Blogs" />
        <InnerLayout className="blogs">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-item">
              <div className="image">
                <img src={blog.image} alt="" />
              </div>
              <div className="title">
                <a target="_blank" rel="noreferrer" href={blog.link}>
                  <h4>{blog.title}</h4>
                </a>
              </div>
            </div>
          ))}
        </InnerLayout>
      </BlogPageStyled>
    </MainLayout>
  );
}

export default Blogs;
