import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
// import logo from '../logo.png'
import userContext1 from '../context/UserContext1'
import { CgProfile } from "react-icons/cg";
import pic from "./photo_2024-09-28_16-15-08.jpg"

const Navbar = () => {
  let ctx = useContext(CartContext)
  let userStore = useContext(userContext1)
  let login = userStore.userData.login
  const handleLogout = () =>{
    localStorage.removeItem('UserDetails')
    userStore.setuserData({login:false,email:''})
  }
  const handleSearchChanger =(e)=>{
    userStore.setsearch(e.target.value.toLowerCase())
  }
  return (
    <div>
       <nav className="navbar navbar-expand-lg  fixed-top opacity-100 ">
  <div className="container-fluid">
   
    <a className="navbar-brand text-black mx-5" href="#"><img className='three' src={pic} alt='hg' style={{width:"200px" , height:"50px"}}/></a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <form className="d-flex ms-auto mt-4 mt-md-auto" role="search">
        <input onChange={handleSearchChanger} className="form-control me-2  border border-dark" type="search" placeholder="Search" aria-label="Search" />
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-7 gap-4 mx-5 popo">
       
      {login === true && <li className="nav-item "> 
          <Link className="nav-link active text-white" aria-current="page" to="/"><b>Home</b></Link>
        </li>}
        {login === true && <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/about"><b>About</b></Link>
        </li>}
        {login === true &&  <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/contact"><b>Contact</b></Link>
        </li>}
        {login === true &&  <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/cart">🛒<b>Cart</b> <sup>{ctx.cartArr.length}</sup></Link>
        </li>}
        {login === false &&  <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/login"><b>Login</b></Link>
        </li>}
        {login === false && <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/signup"><b>Signup</b> </Link>
        </li>}
    
     {login === true && <li onClick={handleLogout} className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="#"><b>Logout</b> </Link>
        </li>}
        {login === true && <li onClick={handleLogout} className="nav-item">
          <Link className=" fs-5 d-flex justify-content-center align-items-center mr-5 " aria-current="page" to="/profile"><b><CgProfile/></b> </Link>
        </li>}
       
         </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar