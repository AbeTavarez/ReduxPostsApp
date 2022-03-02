import axios from "axios";

export const GET_POSTS = "GET_POSTS";

export const getPosts = () => async (dispatch) => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(data.data);
    dispatch({ type: GET_POSTS, payload: data.data });
  } catch (err) {
    console.log(err.message);
  }
};
