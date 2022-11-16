import ProductItem from '../ProductItem'
import product2 from '../../components/ProductItem/img/product1.jpg'
import product3 from '../../components/ProductItem/img/product2.jpg'
import product1 from '../../components/ProductItem/img/product3.jpg'
import product4 from '../../components/ProductItem/img/product4.jpg'
import product5 from '../../components/ProductItem/img/product5.jpg'
import product6 from '../../components/ProductItem/img/product6.jpg'
import product7 from '../../components/ProductItem/img/product7.jpg'
import product8 from '../../components/ProductItem/img/product8.jpg'
import product9 from '../../components/ProductItem/img/product9.jpg'
import product10 from '../../components/ProductItem/img/product10.jpg'
import product11 from '../../components/ProductItem/img/product11.jpg'
import Footer from '../Footer'
import './index.css'


const products = [
    {
        id: 1,
        name: 'Smile Product 2540',
        price: "Rs 100/-",
        img: product1

    },
    {
        id: 2,
        name: 'Smile Product 2540',
        price: "Rs 100/-",
        img:product2
    },
    {
        id: 3,
        name: 'Smile Product 2540',
        price: "Rs 100/-",
        img:product3
    },
    {
        id: 4,
        name: 'Smile Product 2540',
        price: "Rs 100/-",
        img:product4
    },
    {
        id: 5,
        name: 'Smile Product 2540',
        price: "Rs 100/-",
        img:product5
    },
    {
        id: 6,
        name: 'Smile Product 2540',
        price: "Rs 100/-",
        img:product6
    },
    {
        id: 7,
        name: 'Smile Product 2540',
        price: "Rs 100/-",
        img:product7
    },
    {
        id: 8,
        name: 'Smile Product 2540',
        price: "Rs 100/-",
        img:product8
    },
    {
        id: 9,
        name: 'Smile Product 2540',
        price: "Rs 100/-",
        img:product9
    },
    {
        id: 10,
        name: 'Smile Product 2540',
        price: "Rs 100/-",
        img:product10
    },
    {
        id: 11,
        name: 'Smile Product 2540',
        price: "Rs 100/-",
        img:product11
    }
]


const Products = () => {

    return (
        <>
        <div className='product-main-container'>
            <div className='products-img-container'>
            <img className='products-img' src="https://img.freepik.com/premium-vector/horizontal-flat-banner-organic-fertilizer-spikes_82574-2817.jpg?size=626&ext=jpg&ga=GA1.2.1587503888.1663429595&semt=sph" alt="products-img"/>
            </div>
            
        <div className='product-head-container'>
         <h1 className='products-head'>OUR PRODUCTS</h1>
        </div>
        <div className='products-alignment'>
        <ul className="list-p-container">
        {products.map(each=> (
          <ProductItem key={each.id} productDetails={each} />
        ))}
      </ul>
      </div>
      
        </div>
        <Footer/>
        </>
    )
}
export default Products