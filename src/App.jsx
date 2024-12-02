import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './componets/header'
import Footer from './componets/Footer'
import Sidebar from './componets/Sidebar'
import CreatePost from './componets/CreatePost'
import Post from './componets/post'
import PostList from './componets/PostList'
import { useState } from 'react'
import PostListProvider from './componets/store/post-list-store'




function App() {
  
  const[selectTab,setSelectTab] = useState("Home");



  return (
  <PostListProvider>
    <div className='app-container'>
    <Sidebar selectTab={selectTab} setSelectTab={setSelectTab}></Sidebar>
    <div className='Content'>
      <Header />
      { 
        selectTab === "Home" ? <PostList/> : <CreatePost />
      }
      
      
      <Footer/>
      </div>
    </div>
    </PostListProvider>
   
     
    
  )
}

export default App
