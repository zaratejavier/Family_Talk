import React, {useState} from 'react';
import image from '../images/beachFamily.jpg'
import logo from '../images/LogoFiles/ForWeb/medium.png'
import { Image, Button, Modal } from 'semantic-ui-react';
import Register from './user/Register';
import Login from './user/Login';
import { AuthConsumer } from '../providers/AuthProvider';
import "../styles/LandingStyles.css";

const LandingPage = (props) => {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const toggleRegister = () => {
    setShowRegister(!showRegister)
  }
  
  const toggleLogin = () => {
    setShowLogin(!showLogin)
  }

  return (
    <div className="landingPage">
    {props.auth.user? null :
      <div className="landingPage__header">
        <div className="landingPage__buttons">
          <Modal open={showLogin} trigger={<Button id="modal-btn" onClick={() => toggleLogin()}>Sign In</Button>}>
            <Modal.Content>
              <Login toggleLogin={toggleLogin}/>
              </Modal.Content>
            </Modal>

          <Modal open={showRegister} trigger={<Button id="modal-btn" onClick={() => toggleRegister()}>Sign Up</Button>}>
            <Modal.Content>
              <Register toggleRegister={toggleRegister}/>
              </Modal.Content>
          </Modal>
        </div>
      </div> }
        
      <div className="landingPage__body">
        <div className="landingPage__logo">
          <Image src={logo}/>
        </div>
        <div className="landingPage__sentence">
          <p>keep in touch...</p>
          <p>no matter where you are</p>
        </div>
        <div><Image src={image} className="landingPage__image"/></div>
      </div>
    </div>
  )
}

export default function ConnectedLandingPage (props) {
    return (
      <AuthConsumer>
        { auth => <LandingPage { ...props } auth={auth} /> }
      </AuthConsumer>
    )
  }


