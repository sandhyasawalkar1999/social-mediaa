import { createContext, useReducer } from "react";



export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});

const postListReducer = (currPostList, action) => {

  let newPostList = currPostList;
  if (action.type === 'DELETE_POST') {
    newPostList = currPostList.filter(post => post.id !== action.payload.postId);

  }
  else if (action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currPostList];
  }


  return newPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, PostTitle, PosTBody, reactions, tags) => {

    // console.log(`${userId},${PostTitle},${reactions},${tags}`);

    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: PostTitle,
        body: PosTBody,
        reactions: reactions,
        userId: userId,
        tags: tags
      },
    })

  }

  const deletePost = (postId) => {
    dispatchPostList
      ({
        type: 'DELETE_POST',
        payload: { postId, },

      })

  }



  return <PostList.Provider value={{ postList, addPost, deletePost }}>
    {children}
  </PostList.Provider>;
};

const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: 'Going to Mumbai',
    body: ' I am going to Mumbai ',
    reactions: 2,
    userId: 'user_9',
    tags: ['vacation', 'Mumbai', 'Enjoy']
  },
  {
    id: '2',
    title: 'pass ho bhai',
    body: ' pass ho bhai',
    reactions: 15,
    userId: 'user_12',
    tags: ['graduation', 'unbeliave', 'Memory']
  },

]

export default PostListProvider;