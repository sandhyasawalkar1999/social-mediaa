import React, { useContext } from "react";
import { useRef } from "react";
import { PostList } from "./store/post-list-store";

const CreatePost = () => {

  const { addPost } = useContext(PostList);

  const userIDElement = useRef();
  const postTitleElement = useRef();
  const PostBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIDElement.current.value;
    const PostTitle = postTitleElement.current.value;
    const PostBody = PostBodyElement.current.value;
    const reactions = parseInt(reactionsElement.current.value);
    const tags = tagsElement.current.value.split(" ");

    userIDElement.current.value = "";
    postTitleElement.current.value = "";
    PostBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, PostTitle, PostBody, reactions, tags);


  };

  return (
    <form className="create_post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIDElement}
          placeholder="enter your userID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitleElement}
          placeholder="How are u filling today...."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          className="form-control"
          id="body"
          ref={PostBodyElement}
          placeholder="Tell us more about it...."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Ractions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactionsElement}
          placeholder="how many user reacted"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="please enter tag using spaces"
        />
      </div>


      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;

