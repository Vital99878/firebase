import React from 'react';
import './App.css';
import AddPost from "./AddPost"
import Post from "./Post"

const PostsList = ( {posts, onCreate} ) => {
  console.log(posts);
  const p = posts.map( post => <Post {...post} key = {post.id}/> );
  return (

      <section className="Posts">
        <AddPost onCreate={onCreate}/>
        {p}
      </section>
  )
}
export default PostsList;



