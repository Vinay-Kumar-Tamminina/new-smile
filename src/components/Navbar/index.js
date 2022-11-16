import {useState} from 'react'
import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import './index.css';

import greentech from '../Navbar/img/greentech.png';
import DropDown from './Dropdown';
const Navbar = () => {
    const [state, setState] = useState(false)

    const show = () => {
        setState(!state)
      
    }
    return (
        <div>
        <div className='navbar-container'>
                <div>
                <img  className="logo" src={greentech} alt="logo"/>
                </div>
            <div className='links-container' id="link">
                <li><Link  to='/' >Home</Link> </li>
                <li><Link  to='/About' >About</Link></li>
                <li><Link  to='/Products' >Products</Link></li>
                <li><Link to='/Contactus' >Contact Us</Link></li>
                {/* <li><Link to='/Login' >Login</Link></li> */}
                <DropDown/>
            </div>
            <div className='nav-button'>
                    <GiHamburgerMenu onClick={show} />
            </div>
        </div>
        {
            state ? 
            <div className='sidenav-container'>
            <div id="mySidenav" className="sidenav">
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Products ">Products</a>
            <a href="/Contactus">Contact Us</a>
            <DropDown/>
          </div>
            </div>
             :

            ""
        }
        </div>
    )
}
export default Navbar