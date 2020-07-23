import React, { useState, useEffect } from "react"
import { Image, Card, Header } from "semantic-ui-react"
import PostForm from "./PostForm"
import {Link} from 'react-router-dom'
import axios from "axios"
import { AuthConsumer } from "../../providers/AuthProvider"


const Post = (props) => {
  const [editing, setEditing] = useState(false)
  const [like, setLike] = useState({})
  const [postLikes, setPostLikes] = useState('')

  useEffect(() => {
    findLike(props.post.id)
    renderLikes(props.post.id)
  }, [])

  const findLike = (id) => {
    axios.get(`/api/users/${props.userId}/users/likes/${id}`)
      .then((res) => {
        setLike(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }

  const likePost = (postId) => {
    axios.post(`/api/users/${props.userId}/likes`, { post_id: postId, user_id: props.userId })
      .then(res => {
        setLike(res.data)
        renderLikes(postId)
      }).catch((err) => {
        console.log(err)
      })
  }

  const unlikePost = (postId) => {
    axios.delete(`/api/users/${props.userId}/users/likes/${postId}`)
      .then(res => {
        setLike(null)
        renderLikes(postId)
        console.log(res.data)
      })
  }

  const renderLikes = (postId) => {
    axios.get(`/api/likes/${postId}`)
      .then((res) => {
        setPostLikes(res.data)
      })
}
  return(
    <div>
       <Card key={props.post.id}>
         <Image src={props.post.image}/>
         <Header> {props.post.title}</Header>
        <description>{props.post.description}</description>
        {props.auth.user.id === props.post.user_id ? 
        <div>
        <button onClick={() => setEditing(!editing)}>{editing ? "Close Edit" : "Edit"}</button>
        <button onClick={() => props.removePost(props.post.id, props.post.board_id)}>Delete</button> </div> : null}
        
        
        <h4>Likes: {postLikes ? postLikes.length : "0"}</h4>
        {like ? <button onClick={() => unlikePost(props.post.id)}>Unlike</button> : <button onClick={() => likePost(props.post.id)}>Like</button>}

        <Link to={{
          pathname: `/board/${props.post.board_id}/post/${props.post.id}`, showProps: { ...props },
          findLike: {findLike},
          likePost:  {likePost},
          unlikePost:  {unlikePost},
          renderLikes:  {renderLikes},
        }}
        
         >
        <button>View</button>
        </Link>

        {editing ? <PostForm updatePost={props.updatePost}toggleEdit={setEditing} editPost={props.editPost} post={props.post} 
        userId={props.userId} editing = {editing}/> : null } 
        

      </Card>

      <br/>
    </div>
  )
}

const ConnectedPost = (props) => (
  <AuthConsumer>
    { auth => 
      <Post { ...props } auth={auth} />
    }
  </AuthConsumer>
)
export default ConnectedPost;
