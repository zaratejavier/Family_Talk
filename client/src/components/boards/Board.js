import React, { useState, } from "react";
import { Link, } from "react-router-dom"
import { Button, Image } from "semantic-ui-react";
import BoardForm from "./BoardForm";
import BoardView from "./BoardView"

const defaultImage = 'https://simpleicon.com/wp-content/uploads/picture.png';

const Board = (props) => {
  const [ editing, setEditing] = useState(false)

  return ( 
    <>
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <Image src={props.image || defaultImage}/>
      </div>
      <br/>
      <button onClick={() => setEditing(!editing)}>{editing ? "Close Edit" : "Edit"}</button>
      <button onClick={() => props.removeBoard(props.id)}>Delete</button> 
      <Link to={`/board/${props.id}`}
          key={props.id}
          {...props}>
        <button>View</button>
        </Link>

        {/*if editing is true then display form else null  */}
      {editing ? <BoardForm toggleEdit={setEditing} {...props}/> : null } 
    </>
  )
};

export default Board;