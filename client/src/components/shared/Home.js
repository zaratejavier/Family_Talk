import React, {useState} from 'react';
import { Button, Dropdown, Modal, } from 'semantic-ui-react';
import AddPost from '../userPosts/AddPost'
import CreatedBoards from '../user/CreatedBoards';
import CreatedPosts from '../user/CreatedPosts';
import './FamilyRoom.css'
import { AuthConsumer } from '../../providers/AuthProvider';
import AddBoard from '../user/AddBoard';

const Home = (props) => {
 const [view, setView] = useState('Board')
     
  return (
    <>
    <div className="home">
      <hr/>
        <div className="home__header">{props.auth.user.name} {props.auth.user.last_name}
        <div className="home__modal">
          <Dropdown icon="plus" className="home__DropDown">
            <Dropdown.Menu>
              <Modal.Content>
                <AddBoard />
                <AddPost />
              </Modal.Content>
            </Dropdown.Menu>
          </Dropdown> 
        </div>
      </div>
      <div className="home__buttons">
        <Button color= "grey" onClick = {() => setView('Board') }>Boards</Button> 
        <Button color="grey" onClick = {() => setView('Post') }>Posts</Button>
      </div>
    </div>
    <div className="View">
        { view === 'Board' ? <CreatedBoards /> : <CreatedPosts /> }
    </div>
      </>
  )
}

const ConnectedHome = (props) => {
  return (
  <AuthConsumer>
    {auth=> (<Home {...props} auth={auth} />)}
  </AuthConsumer>
  )
}

export default ConnectedHome;