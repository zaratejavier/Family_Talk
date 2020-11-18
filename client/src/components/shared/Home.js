import React, {useState} from 'react';
import { Button, Dropdown, Modal, } from 'semantic-ui-react';
import AddPost from '../userPosts/AddPost'
import CreatedBoards from '../user/CreatedBoards';
import CreatedPosts from '../user/CreatedPosts';
import './FamilyRoom.css'
import { AuthConsumer } from '../../providers/AuthProvider';
import AddBoard from '../user/AddBoard';
import AddIcon from '@material-ui/icons/Add';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Home = (props) => {
  const [view, setView] = useState('Board')
  
   const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
     
  return (
    <>
    <div className="home">
      <hr/>
        <div className="home__header">{props.auth.user.name} {props.auth.user.last_name} </div>
        <div className="home__modal">
            {/* <Dropdown icon="plus" className="home__DropDown">
            <Dropdown.Menu>
              <Modal.Content>
                <AddBoard />
                <AddPost />
              </Modal.Content>
            </Dropdown.Menu>
            </Dropdown>  */}
            
          <Button style={{border: "none", background: "none"}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <AddIcon style={{ fontSize: 50, color:"gray" }} />
          </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><AddBoard/></MenuItem>
          <MenuItem onClick={handleClose}><AddPost/></MenuItem>
        </Menu>
        </div>
      
      <div className="home__buttons">
        <button className= "home__button1" onClick = {() => setView('Board') }>Boards</button> 
        <button className= "home__button2" onClick = {() => setView('Post') }>Posts</button>
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