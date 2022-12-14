import { Box } from "@chakra-ui/react";
import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";
import Navbar from "../BlogNavbar/Navbar";
import logoPic from "../blogImage/logo_and_text.svg";
import Footer from "../BlogNavbar/Footer";
import "./Home.css";
import { Link } from "react-router-dom";
import content from "../blog.json";
import "./arrowUp.css";
import ArrowUp from "./ArrowUp";

function BlogHome() {
  const Data = () => (
    <div className="blog-content-container">
      {content.map((el) => (
        <Link to={`/blog/${el.id}`} style={{ textDecoration: "none" }}>
          <div className="blog-container" key={el.id}>
            <div className="image-wrap-content">
              <img src={el.imgUrl} alt="img" />
            </div>
            <div className="text-wrap-content">
              <p className="text-blue text-sm text-bold-md">{el["head-tag"]}</p>
              <p className="text-lg text-bold">{el.heading}</p>
              <p className="text-md text-clamp text-gray" style={{ fontSize: "1.2rem" }}>
                {el.description}
              </p>
              <div className="blog-content-bottom">
                <div className="image-author-wrap">
                  <img src={el.authorImg} alt="authorImg" />
                </div>
                <div>
                  <p className="text-sm text-bold text-gray">{el.author}</p>
                  <div className="flex">
                    <p className="text-sm text-gray">{el.date}</p>
                    <div className="circle"></div>
                    <p className="text-sm text-gray">{el.read} min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
  return (
    <div>
      <Box
        w="100%"
        height={"100%"}
        bgImage="url('https://blog.tmetric.com/content/images/size/w2000/2022/01/MicrosoftTeams-image--1-.png')"
        bgPosition="top"
        bgRepeat="no-repeat"
        bgSize={"full"}
      >
        <Navbar />
        <Box height={"280"} padding={"2rem"}>
          <Stack
            direction="row"
            margin={"auto"}
            display={"flex"}
            justifyContent={"center"}
            height={"70"}
            padding={"2rem"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Image boxSize="280px" padding={"2rem"} src={logoPic} />
          </Stack>
          <Stack
            direction="row"
            display={"flex"}
            justifyContent={"center"}
            height={"31"}
            width={"100%"}
            alignContent={"center"}
            alignItems={"center"}
            padding={"2rem"}
          >
            <Text height={5} color={"white"} fontWeight={400} fontSize={"24"} fontStyle={300}>
              Blog to Increase Personal and Business Productivity
            </Text>
          </Stack>
        </Box>
        <Box height={"auto"}>
          <Data />
        </Box>
      </Box>
      <Footer />
      <ArrowUp />
    </div>
  );
}

export default BlogHome;
