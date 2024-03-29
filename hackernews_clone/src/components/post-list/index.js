import React from "react";
import gql from "graphql-tag";

import { graphql } from "react-apollo";
import "./index.css";

const POST_QUERY = gql`
  query {
    postsList {
      items {
        id
        createdAt
        url
        description
        votes
      }
    }
  }
`;

const PostList = ({ loading, posts, refetch }) => {
  if (loading) return <p>Loading...</p>;
  return posts.map(post => console.log(post));
};

export default graphql(POST_QUERY, {
  props(result) {
    const { data } = result;
    const { loading, refetch } = data;
    let posts = [];
    if (data && data.postsList) posts = data.postsList.items;
    return {
      loading,
      posts,
      refetch
    };
  }
})(PostList);
