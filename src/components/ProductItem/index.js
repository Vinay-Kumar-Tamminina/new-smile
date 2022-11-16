// import {Link} from 'react-router-dom';
import './index.css'
const ProductItem = (props) => {
    const {productDetails} = props
    const {name,  img} = productDetails

    return (
        <div className='main-products-container'>
          <div className='products-container'>
                <div className="product-image-container">
                    <img className="product-image" src={img} alt="" />
                </div>
            <div className='details-container'>   
                <div>
                    <h3 className='product-heading'>{name}</h3>
                    {/* <p className='price'>{price}</p> */}
                </div>
                <div className='more-details-container'>
                    {/* <Link className="more-details" to={moredetails} >More Details</Link> */}
                </div>
            </div>     
          </div>
         
        </div>
    )
}
export default ProductItem