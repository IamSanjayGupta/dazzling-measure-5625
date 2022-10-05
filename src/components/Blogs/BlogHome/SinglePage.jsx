import React from "react";
import { useParams } from "react-router-dom";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import content from "../blog.json";
import Footer from "../BlogNavbar/Footer";
import BlogSearchNav from "../BlogNavbar/BlogSearchNav";
import ArrowUp from "./ArrowUp";

function SinglePage() {
  const { id } = useParams();
  const PageData = () => {
    switch (id) {
      case "1":
        return <Page1 />;
      case "2":
        return <Page2 />;
      case "3":
        return <Page3 />;
      default:
        return <Page3 />;
    }
  };
  const el = content.find((el) => (el.id = id));
  console.log(el.description);
  return (
    <div>
      <BlogSearchNav />
      <div className="indi-blog">
        <div className="indi-blog-content">
          <p className="title-text">{el["head-tag"]}</p>
          <p className="heading-text">{el.heading}</p>
          <p className="description-text">{el.description}</p>
          <div className="author-details">
            <div>
              <img className="author-img" src={el.authorImg} alt="img" />
            </div>
            <div>
              <p className="author-text">{el.author}</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <p className="date-text">{el.date}</p>
                <p className="read-text">{el.read} min read</p>
              </div>
            </div>
          </div>
        </div>
        <img className="logo-img" src={el.imgUrl} alt="img" />
      </div>
      <PageData />
      <Footer />
      <ArrowUp />
    </div>
  );
}

export default SinglePage;
