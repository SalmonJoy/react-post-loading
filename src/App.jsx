import { useEffect, useState } from 'react'
import './App.css'
import './Post'
import Post from './Post'

function App() {
  
const [postID, setPostID] = useState(1)
  
function handleClick(event){
setPostID(prev=>prev+1)
}





  return (
    <>
      <div>
        <Post number = {postID} status={true}></Post>
      <button className='btn btn-primary' onClick={handleClick}>Next Post</button>
        </div>
    </>
  )
}

export default App
