const PostItem = ({ post }) => {
  console.log("posts", post);
  return (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
