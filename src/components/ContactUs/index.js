import Footer from '../Footer'
import './index.css'
import { AiFillHome } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';
import { MdMail } from 'react-icons/md';
import { AiFillUnlock } from 'react-icons/ai';
import {AiFillLock } from 'react-icons/ai';

const ContactUs = () => {
    return(
      <div>
      <div className='contact-container'>
        <div className='get-container'>
        <h1 className='get-heading'>Get in touch</h1>
        <p className='get-para'>Want to get touch? we would love to hear from you. Here's How can you reach us.</p>
        </div>
        <div>
           <div className='form-container'>
            <form className='form-2-container'>
              <label className='label-1' for="fname">First name:</label><br/>
              <input className='label-2' type="text" id="fname" name="fname"  ></input><br/>
              <label className='label-1'  for="lname">Last name:</label><br/>
              <input className='label-2' type="text" id="lname" name="lname"  ></input><br/>
              <label className='label-1'  for="lname">Gmail:</label><br/>
              <input className='label-2' type="text" id="lname" name="lname"  ></input><br/>
              <label className='label-1'  for="lname">Phone Number:</label><br/>
              <input className='label-2' type="text" id="lname" name="lname"  ></input><br/><br/>
              <button className='form-button'>Submit</button>
          </form> 
          <div className='contact-2-container'>
           <div>
              <h1 className='c-head'>Contact</h1>
           </div>
           <div>
             <p><span className='lgo-span'><AiFillHome/></span>Saraswathi nagar, Mirchi Yard, Guntur-636008</p>
             <p><span className='lgo-span'><MdCall/></span>xxx-xxxx-xxx</p>
             <p><span className='lgo-span'><MdMail/></span>smilegreenindia.com</p>
             <p><span className='lgo-span'><AiFillUnlock/></span> Monday-Saturday  09:30am-03:30pm</p>
             <p><span className='lgo-span'><AiFillLock/></span>Sunday closed</p>
           </div> 
           </div> 
           </div>     
        </div>
      </div>
        <Footer/>
      </div>
    )
}

export default ContactUs













