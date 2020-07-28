import React from 'react'
import './ContactUs.css'
import Javier from './images/Javier.jpg'
import shawn from './images/shawn.png'
import lindsay from './images/lindsay.png'
import joey from './images/joey.png'
import kyle from './images/kyle.png'






const ContactUs = () => {

    return (
      <div>
        <div className="header">
          <h1>OUR AMAZING TEAM</h1>
        </div>
        <p className='below-header'>Please feel free to reach out to us if you have an comments or questions</p>

      <div className='parent'>
        <div>
          <img className="shawn" src={shawn} alt="Shawn" />            
          <h3>Shawn Smith</h3>
          <i>Software Developer</i>
            <p>srsmith11@live.com</p>
            <a href="https://www.linkedin.com/in/javier-zarate-b01a04112/" target="_blank"><i class="linkedin icon"></i></a>
          <a style={{color:"black"}} href="https://github.com/srsmith0" target="_blank"><i class="github icon"></i></a>
        </div>

        <div>
          <img className="javier" src={Javier} alt="Javier" />
          <h3>Javier Zarate</h3>
          <i>Software Developer</i>
          <p>zarate.javier.jz@gmail.com</p>
          <a href="https://www.linkedin.com/in/shawnsmith11/" target="_blank"><i class="linkedin icon"></i></a>
          <a style={{color:"black"}} href="https://github.com/zaratejavier" target="_blank"><i class="github icon"></i></a>
        </div>

          
          <div>
          <img className="lindsay" src={lindsay} alt="Lindsay" />
          <h3>Lindsay Boyden</h3>
          <i>Software Developer</i>  
            <p>LindsayBoyden@something.com</p>
            <a href="https://www.linkedin.com/in/lindsay-boyden-9b523a10a/" target="_blank"><i class="linkedin icon"></i></a>
          <a style={{color:"black"}} href="https://github.com/lcboyden" target="_blank"><i class="github icon"></i></a>
        </div>

          <div>
          <img className="joey" src={joey} alt="Joey" />
          <h3>Joey DeLaCruz</h3>
          <i>Software Developer</i>  
            <p>smiles.jtd@gmail.com</p>
            <a href="https://www.google.com/search?sxsrf=ALeKk01Y_ebi-jk_LT22H8mRgr_pCbKs_Q%3A1595909803174&ei=q6YfX6qMCsOvtAajqoyAAg&q=joey+delacruz&oq=joey+delacruz&gs_lcp=CgZwc3ktYWIQAzIHCCMQsAIQJ1CXEVjeE2CPFWgAcAB4AIABU4gB6AGSAQEzmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwjqjaWni-_qAhXDF80KHSMVAyAQ4dUDCAw&uact=5" target="_blank"><i class="linkedin icon"></i></a>
          <a style={{color:"black"}} href="https://github.com/TurtleMaster-Joey" target="_blank"><i class="github icon"></i></a>
        </div>
        
          <div>
          <img className="kyle" src={kyle} alt="Kyle" />
          <h3>Kyle Dunshee</h3>
          <i>Software Developer</i>    
            <p>Kpdunshee@gmail.com</p>
            <a href="https://www.linkedin.com/in/kyle-dunshee/" target="_blank"><i class="linkedin icon"></i></a>
          <a style={{color:"black"}} href="https://github.com/kdunshee" target="_blank"><i class="github icon"></i></a>
        </div>  
      </div>

      </div>
    )
           
}


// const styles = {
//     flex: { 
//       display: "flex",
//       flexDirection: 'column',
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: 'white',
//       fontSize: '15px',
//       border: "2px solid gray",
//       backgroundColor: 'white',
    
//     },
    
//   };

export default ContactUs;
