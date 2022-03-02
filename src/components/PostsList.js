import { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions";
import PostItem from "./PostItem";

const PostList = ({ posts, getPosts }) => {
  useEffect(() => {
    const fetchData = async () => {
      getPosts();
    };
    fetchData();
  }, []);
  console.log("list", posts);
  return (
    <>
      <h1>Post List </h1>

      {posts.length > 0 ? (
        posts.map((post) => <PostItem post={post} key={post.id} />)
      ) : (
        <h3>No postst here yet...</h3>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps, { getPosts })(PostList);
