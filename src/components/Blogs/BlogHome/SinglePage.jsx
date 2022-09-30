import React from 'react'
import { useParams } from "react-router-dom";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import content from '../blog.json'
import Footer from '../BlogNavbar/Footer';
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
  }
  const el = content.find((el) => (el.id = id));
  console.log(el)
  return (
    <div>
      <div className="indi-blog">
        <p>{el["head-tag"]}</p>
        <p>{el.heading}</p>
        <p>{el.description}</p>
        <img src={el.authorImg} alt="img" />
        <p>{el.author}</p>
        <p>{el.date}</p>
        <p>{el.read}</p>
        <img src={el.imgUrl} alt="img" />
      </div>
      <PageData />
      <Footer />
    </div>
  )
}

export default SinglePage

