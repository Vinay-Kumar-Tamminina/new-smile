import './footer.css'

import { TiSocialLinkedin } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import {MdFacebook} from 'react-icons/md'
import {ImYoutube2} from 'react-icons/im'
const Footer = () => {

    return (
       <div>
        
          <div className='footer-main-container'>
          <hr className='hr'/>
            <div className='section-1-main-container'>
                    <div className='news-container'>
                        <label id="news" className='news-label'>News Letter </label>
                        <input htmlFor="news" placeholder='Enter Your Gmail' className='news-input' />
                        <button className='sub-button'>Subscribe</button>
                    </div>   
                <div className='usefull-container'>
                    <div className='links-l-container'>
                        <h1 className='usefull-head'>Navigate to</h1>
                        <ul className='usefull-links-l' id="list">
                            <li ><a className='us-l' href='/'>Home</a></li>
                            <li><a  className='us-l' href='/About'>About</a></li>
                            <li><a className='us-l' href='/Products'>Products</a></li>
                            <li><a className='us-l' href='/Contactus'>Contact Us</a></li>
                        
                        </ul>
                    </div>    
                </div>
                 
                <div className='follow-container'>
                  <h1 className='follow-head'>Follow Us</h1>
                <div className='social-container'>
                <div className='icon-container'>
                <TiSocialLinkedin className='s-icon'/>
                </div> 
                <div className='icon-container'>
                <TiSocialTwitter className='s-icon'/>
                </div> 
                <div className='icon-container'>
                <AiOutlineInstagram className='s-icon'/>
                </div> 
                <div className='icon-container'>
                <FiMail className='s-icon'/>
                </div> 
                <div className='icon-container'>
                <MdFacebook className='s-icon'/>
                </div> 
                
                </div>
                <h6 className='follow-head'>Subscribe Our Youtube Channel</h6>
                <div className='youtube-container'>
                <ImYoutube2 className='yotube-icon'/>
                </div>

            </div>
              </div>
              <hr className='hr'/>
              <p className='copyright-para'>Copyrights @2022 Tonmetri Solutions Pvt Ltd</p>
          </div>
        
       
       </div>
    )
}

export default Footer