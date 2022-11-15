# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




<div className='navbar-main-container'>
           <div className='navbar-container'>
             <Link to='/' >Home</Link>
             <Link  to='/About' >About</Link>
             <Link  to='/Products' >Products</Link>
             <Link  to='/ContactUs' >Contact Us</Link>
             <Link  to='/Terms' >Terms</Link>
           </div>
        </div>















        import {Link} from 'react-router-dom'
import './index.css'
const Navbar = () => {
    return (
        <div className='navbar-main-container'>
           <div className='navbar-container'>
             <Link to='/' >Home</Link>
             <Link  to='/About' >About</Link>
             <Link  to='/Products' >Products</Link>
             <Link  to='/ContactUs' >Contact Us</Link>
             <Link  to='/Terms' >Terms</Link>
           </div>
        </div>
    )
}
export default Navbar













<div className='navbar-main-container'>
            <div className='navbar-container'>
               
            <div className='navbar-links'>
                <div className='logo-container'>
                    <img src={smile} className="logo" alt="logo"/>
                </div>
                <div>
                    <li><Link  to='/' >Home</Link> </li>
                    <li><Link  to='/About' >About</Link></li>
                    <li><Link  to='/Products' >Products</Link></li>
                    <li><Link to='/ContactUs' >Contact Us</Link></li>
                    <li><Link  to='/Share' >Share</Link></li>
                </div>    
            </div>
            
                <div className='nav-button'>
                    <FiMoreVertical/>
                </div>













                .navbar-container {
  display: flex;
  
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  background-color: rgb(245, 245, 245);
  height: 60px;
  
}
.logo {
  width: 100px;
}

.navbar-links {
  display: flex;
 
  list-style-type: none;
  
}

/* .nav-button {
  display: none;
} */






































import './index.css'

import { TiSocialLinkedin } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import {MdFacebook} from 'react-icons/md'
const Footer = () => {

    return (
       <div>
          <div className='footer-main-container'>
            <div className='section-1-main-container'>
                <div className='news-container'>
                   <label id="news">News Letter </label>
                   <input htmlFor="news" />
                <div className='usefull-container'>
                    <div className='links-container'>
                    <h4>Usefull Links</h4>
                    
                </div>
            </div>
                </div> 
                <div className='follow-container'>
                  <h4>Follow Us</h4>
                <div className='social-container'>
                    <TiSocialLinkedin/>
                    <TiSocialTwitter/>
                    <AiOutlineInstagram/>
                    <FiMail/>
                    <MdFacebook/>
                </div>
            </div>
              </div>
              <hr/>
              <p>jbsdcjhavdjcvjhdvcj</p>
          </div>
        
       
       </div>
    )
}

export default Footer

.footer-main-container {
    background-color:#798fe8;
    color:white;
    
}

.news-container {
    display: flex;
    flex-direction: column;
    
}
.links-container {
    display: flex;
    flex-direction: column;
}
.section-1-main-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}
