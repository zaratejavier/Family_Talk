
import React, { useState } from "react"
import {Button} from 'semantic-ui-react'
import CommentsForm from './CommentsForm'
import { AuthConsumer } from "../../providers/AuthProvider"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import "../comments/Comment.css"

const Comment = (props) => {  
  const [editing, setEditing] = useState(false)
  
  function changeEdit(){
    return setEditing(!editing)
  }

return (
<div className="comment__container">
    <p className="comment__text">{props.comment.owner} {props.comment.description}</p>
    {props.auth.user.id === props.comment.user_id ? 
    <div className="comment__icons">
     <button className="comment__button" onClick = {() => props.removeComment(props.comment.id)}><DeleteIcon style={{ fontSize: 25 }}/></button>
     <button className="comment__button" onClick = {() => setEditing(!editing)}>  <EditIcon style={{ fontSize: 25 }}/></button>
     </div> : null }
      {editing && <CommentsForm postId = {props.comment.post_id} userId = {props.comment.user_id} editComment = {props.editComment} 
      editing = {editing} description = {props.comment.description} commentId = {props.comment.id} changeEdit ={changeEdit}/>}
</div>
)
}
              
        

const ConnectedComment = (props) => (
    <AuthConsumer>
      { auth => 
        <Comment { ...props } auth={auth} />
      }
    </AuthConsumer>
  )
  export default ConnectedComment;
  