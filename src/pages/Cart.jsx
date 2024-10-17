import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {
  let ctx = useContext(CartContext)
  console.log(ctx)

  let arr = ([])


  const handleIncerment = (ans, i) => {
    let updatedobj = {
      ...ans,
      quantity: ans.quantity + 1,
      price: ans.price + (ans.price / ans.quantity)
    }
    console.log(updatedobj)
    let copyArr = [...ctx.cartArr]
    copyArr[i] = updatedobj
    ctx.setcartArr(copyArr)
  }
  const handleDecrement = (ans, i) => {
    if (ans.quantity <= 1) {

      return
    }

    let updatedobj = {
      ...ans,
      quantity: ans.quantity - 1,
      price: ans.price - (ans.price / ans.quantity)
    }
    console.log(updatedobj)
    let copyArr = [...ctx.cartArr]
    copyArr[i] = updatedobj
    ctx.setcartArr(copyArr)

  }
  let sum = 0
  ctx.cartArr.forEach((ele) => {
    sum = sum + ele.price
  })
  console.log(sum)
  const handleDelete = () => {

  }
  // console.log(props.cartArr)

  // let handleDelete = (obj,i)=>{
  //    console.log(obj,i)

  //    let copyArr = [...props.cartArr]
  //    copyArr.splice(i,1)
  //    props.setcartArr(copyArr)
  // }

  // let sum=0
  // props.cartArr.forEach((ele)=>{
  //   sum = sum+ele.price
  // })
  // console.log(sum)

  // const handleIncerment  = (obj,i)=>{
  //   console.log(obj,i)

  // let updatedobj = {
  //   ...obj,
  //   quantity:obj.quantity + 1,
  //   price:obj.price + (obj.price/ obj.quantity)
  // }
  // console.log(updatedobj)
  // let copyArr = [...props.cartArr]
  // copyArr[i]=updatedobj
  // props.setcartArr(copyArr)
  // }

  // const handleDecrement  = (obj,i)=>{
  //   console.log(obj,i)
  //   if(obj.quantity<=1){

  //     return
  //   }

  // let updatedobj = {
  //   ...obj,
  //   quantity:obj.quantity - 1,
  //   price:obj.price - (obj.price/ obj.quantity)
  // }
  // console.log(updatedobj)
  // let copyArr = [...props.cartArr]
  // copyArr[i]=updatedobj
  // props.setcartArr(copyArr)
  // }

  return (
    <div style={{ marginTop: '100px' }}>
    <div className='table-responsive'>
    <table className="table aline-middle text-center">
        <thead>
          <tr>
            <th scope="col">SNo.</th>
            <th scope="col">Products</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        {
          ctx.cartArr.map((ele, index) => {
            return <tr>
              <th scope="row">{index + 1}</th>
              <td><img src={ele.thumbnail} alt="" height={'100px'} width={'100px'} /></td>
              <td>{ele.title}</td>
              <td>{Math.ceil(ele.price)} $</td>
              <td><button onClick={() => handleDecrement(ele, index)} className='btn btn-info bn'>-</button>{ele.quantity}<button onClick={() => handleIncerment(ele, index)} className='btn btn-info bn'>+</button></td>
              <td><button onClick={() => ctx.removeFromCart(ele, index)} className='btn btn-danger dn'>delete</button></td>

            </tr>
          })
        }

      </table>
    </div>
      <div className='text-center fs-5'>
      <button className='rounded-4 bg-light mb-3 p-2'><strong>Total Price:-{Math.ceil(sum)}$</strong></button>
      </div>
    </div>
  )
}

export default Cart