import Footer from '../Footer'

import './index.css'
const About = () => {
    return (
        <div className="abt-container">
          <div className="img-container">
            <img className='abt-img' src='https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="abt-img" />
          </div>
          <div className='abt-details'>
            <div className="each-abt">
              <div className="each-details">
                <span className="each-head">COMPANY OVERVIEW</span>
                <p className="each-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <div className='each-img-container'>
                <img className='each-img' src='https://img.freepik.com/free-vector/set-bottle-bags-with-fertilizer-gardening_1284-46446.jpg?size=338&ext=jpg&ga=GA1.2.1587503888.1663429595&semt=sph' alt='each-img'/>
              </div>
            </div>
            <div className="each-abt">
              <div className="each-details">
                <span className="each-head">OUR PRODUCTS</span>
                <p className="each-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <div className='each-img-container'>
                <img className='each-img' src='https://img.freepik.com/free-vector/set-bottle-bags-with-fertilizer-gardening_1284-46446.jpg?size=338&ext=jpg&ga=GA1.2.1587503888.1663429595&semt=sph' alt='each-img'/>
              </div>
            </div>
            <div className="each-abt">
              <div className="each-details">
                <span className="each-head">VISION & MISSION</span>
                <p className="each-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <div className='each-img-container'>
                <img className='each-img' src='https://img.freepik.com/free-vector/set-bottle-bags-with-fertilizer-gardening_1284-46446.jpg?size=338&ext=jpg&ga=GA1.2.1587503888.1663429595&semt=sph' alt='each-img'/>
              </div>
            </div>
          </div>
  
        <Footer/>
        </div>
    )
}

export default About
