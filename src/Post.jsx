/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

export default function Post(props) {
    const [loading, setLoading] = useState(props.status)
    
    const [post, setPost] = useState(null);

    useEffect(()=>{
        const controller = new AbortController();
        console.log("https://dummyjson.com/posts/"+props.number)
        fetch("https://dummyjson.com/posts/"+props.number,{signal:controller.signal})
        .then((res)=>res.json())
        .then(data=>{
          setPost(data)
          setLoading(false)
        })
        .catch(err => {
            if (err.name === 'AbortError') {
              console.log('AbortError: Fetch request aborted of postID = '+ props.number);
            }
        })
        
        return() => controller.abort();
      },[props.number])
  return (
    <div>
{
          loading?(
            "Loading..."
          ):(
            <>
            
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            </>
          )
        }
    </div>
  )
}
