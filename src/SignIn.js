import React from 'react';
import './App.css';


const SignIn = ( post ) => {
  return (
     <div>
       <h4>{post.title}</h4>
       <p>{post.content}</p>
       <p>{post.stars}</p>
       <p>{post.comments}</p>
       <button>Star</button>
       <button>Delete</button>
     </div>
  )
}

export default SignIn;


