import React, { useState } from 'react';
import BoardForm from '../boards/BoardForm';
import { Modal, Button } from 'semantic-ui-react';

const AddBoard = (props) => {
  const [showForm, setShowForm] = useState(false)
  
  return (
    <>
    <Modal trigger={<p>Add Board</p>}>
      <Modal.Content>
        <BoardForm create={true} toggleForm={setShowForm} />
      </Modal.Content>
  </Modal>
    </>
  )
 
}

export default AddBoard

// return (
//   <>
//   {showForm && <BoardForm Create={true} toggleForm={setShowForm} />}
//     <br/>
//     <button onClick={() => setShowForm(!showForm)}>
//       {showForm ? "Close Form" : "Add Board"}
//     </button>
//   </>
// )
