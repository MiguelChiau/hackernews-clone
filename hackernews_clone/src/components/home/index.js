import React from "react";

import "./index.css";
import PostList from "../post-list";

const Home = () => {
  return (
    <div className="home">
      This is the Home page
      <PostList />
    </div>
  );
};
export default Home;
