import React from "react";
import { useLocation } from "react-router-dom";

const ViewDetails = () => {
  const location = useLocation();
  console.log(location);
  let view = location.state;

  let star = "";
  let temp = Math.round(view.rating);
  for (let i = 1; i <= temp; i++) {
    star += "⭐";
  }

  return (
   <div  style={{marginTop:"100px"}} className="container">
    <div className="d-flex my-5 detailed">
      <div className="col-md-6 pic">
      
        <img height="80%" width="70%" src={view.images[0]}/>

    

      </div>
      <div className="col-md-6">
          <h1 className="">Review</h1>
          <h3>Title:-{view.title}</h3>
          <h4>brand:-{view.brand}</h4>
          <h5>Category:-{view.category}</h5>
          <h5>Price:-{view.price}</h5>
          <h6>Return:-{view.returnPolicy}</h6>
          {/* <Link to={products.url} className='btn btn-info my-3'>products details</Link> */}
      </div>
    </div>
    {/* <div className="d-flex">
    <div className="col-md-6">
    efef
      </div>

      <div className="col-md-6">
      ffe
    </div>
    </div> */}
   
<div class="d-flex detailed">
 
  <img
    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
    alt="John Doe"
    class="me-3 rounded-circle"
    style={{width: "60px;", height: "60px;"}}
  />
  <div>
    <h5 class="fw-bold">
      John Doe
      <small class="text-muted">Posted on February 19, 2021</small>
    </h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
</div>

   </div>

  );
};

export default ViewDetails;
