import React from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Menu, Dropdown, Image} from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import MSLogo from '../../assets/mediumsmall.jpg'
import './Navbar.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class Navbar extends React.Component {

   trigger = (
  <span>
    <Image src={MSLogo} className='navbar__logo'/>
  </span>
)

trigger2 = () => {
 const { auth: { user, handleLogout, }, location, } = this.props;
 return (
  <div className="navbar__dropdown">
     <Image className='navbar__image' src={user.image || defaultImage} className='proImage' />
     <ArrowDropDownIcon className="navbar__icon" fontSize="large" style={{color: "rgb(130, 145, 150)"}}/>
    <span className="navbar__name">{user.name}</span>

  </div>
 )
}

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
          <Dropdown text = {user.name}  trigger = {this.trigger2()} icon = {null}>
        <Dropdown.Menu>
            <Dropdown.Item as ={Link} to= '/settings'>Settings</Dropdown.Item>
            <Dropdown.Item onClick = {() => handleLogout(this.props.history)}>Logout</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>    
      )
    } 
   }

  render() {
    return( 
      <div className="navbar">
      <Dropdown  trigger={this.trigger} icon={null}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/'>Home </Dropdown.Item>
          <Dropdown.Item as ={Link} to='/landingPage'>Family Room</Dropdown.Item>
          <Dropdown.Item as={Link} to='/publicPage'>Explore</Dropdown.Item>
          <Dropdown.Item as={Link} to='/contactUs'>Contact</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
        {this.rightNavItems()}
        </div>
  </div>
  )} 
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);