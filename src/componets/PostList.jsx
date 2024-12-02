import React from 'react'
import Post from './post'
import { PostList as PostListData } from './store/post-list-store'
import { useContext } from 'react'

const PostList = () => {
const{postList} = useContext(PostListData)
  console.log(postList)
  return (
  <>

    {postList.map((post) => <Post key={post.id} post ={post} />)}
    
    </>
  )
}

export default PostList;