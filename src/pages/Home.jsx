import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
 import Demo from '../Components/Demo';
import { Link } from 'react-router-dom';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CartContext from '../context/CartContext';
import userContext1 from '../context/UserContext1';


const Home = () => {

  let ctx = useContext(CartContext)
  let searchCtx = useContext(userContext1)
  let searchValue = searchCtx.search
  console.log(searchValue)

  const [products, setproducts] = useState([]);

  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  const getAllData = async () => {
    setloading(true)
    try {
      let res = await axios.get('https://dummyjson.com/products/?limit=0&skip=0')
      console.log(res.data.products);
      setproducts(res.data.products)
      setloading(false)
    } catch (error) {
      console.log(error)
      seterror(true)
    }
  }
  useEffect(() => {
    getAllData()
  }, [])

  // let handleAdd = (ans)=>{
  //   //  console.log(ans)
  //   // Array.puss(ans)
  //   // console.log(arr)
  //   let updatedobj = {...ans,quantity:1}
  //   // console.log(updatedobj)
  //   props.xyz(updatedobj)
  //   // props.xyz(ans)
  // }
  // const handleAdd=()=>{

  // }
  const [currentpage, setcurrentpage] = useState(1);
  console.log(currentpage)
  let itemPerPage = 10;
  let lastIndex = itemPerPage*currentpage;
  let firstIndex = lastIndex-itemPerPage;
  let filteredProducts =products.filter((ele)=>ele.title.toLowerCase().includes(searchValue) || ele.category.toLowerCase().includes(searchValue));
  console.log(filteredProducts) 

  let sliceArr = filteredProducts.slice(firstIndex,lastIndex)
  let noOFButton = Math.ceil(filteredProducts.length/itemPerPage)
  let btnArr = new Array(noOFButton).fill(0)

  const handlePrev= ()=>{
    if(currentpage>1){
    setcurrentpage(currentpage-1)
  }
}

const handleNext = () =>{
  if(currentpage<=btnArr.length-1){
    setcurrentpage(currentpage+1)
  }
}

  return (
    <div className='my-5 mt-5' tyle={{paddingtop:'50px'}}>
      {loading ? (
        <div className="row m-0 p-0 p-3 justify-content-center gap-3">
          {Array(6).fill(0).map(() => (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <div className="col-md-3 mb-4">
                <Skeleton height={300} />
                <div className="d-flex justify-content-between">
                  <Skeleton width={100} />
                  <Skeleton width={100} />
                </div>
              </div>
            </SkeletonTheme>
          ))}
        </div>
      ) : (
        <div>
          <div className='row m-0 p-0 p-3 justify-content-center gap-3'>
            {
             sliceArr.map((ele) => {
                return ele.thumbnail && <div className="card  shadow-lg  bg-body rounded" style={{ width: '18rem' }}>
                  <img src={ele.thumbnail} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <p className="card-text"><strong>Price:</strong> {ele.price} $</p>
                    <p className="card-text"><strong>category:</strong> {ele.category} $</p>
                    <p className="card-text"><strong>title:</strong> {ele.title} $</p>
                   <div className="d-flex">
                   <Link to="/view" state={ele} className=" btn btn-primary one">View Details</Link>
                   <button onClick={() => ctx.addtoCart(ele)} className='btn btn-success mx-1 two'>Add to cart</button>
                   </div>
                  </div>
                 

                </div>
              })
            }
          </div>
          <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center flex-wrap">
                      <li onClick={handlePrev} className="page-item disabled">
                        <a className="page-link">Previous</a>
                      </li>
                      
                      {btnArr.map((ele,key)=>{
                        return <li onClick={()=>setcurrentpage(key+1)} className={currentpage===key+1? "page-item active":"page-item"}><Link className="page-link rounded-5 text-dark" href="#">{key+1}</Link></li>
                      })}
                      <li onClick={handleNext}className="page-item">
                        <Link className="page-link" href="#">Next</Link>
                      </li>
                    </ul>
                  </nav>
        </div>
      )}
    </div>
  )
}

export default Home