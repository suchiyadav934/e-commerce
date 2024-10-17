import React, { useState } from 'react';
import CartContext from './CartContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartState = (props) => {
    const [cartArr, setcartArr] = useState([]);
    console.log(cartArr)
    function addtoCart(ans) {
        let findData = cartArr.find((ele) => ele.id === ans.id)
        if (findData) {
            // alert('add to cart')

            toast.info('ALREDY ADD', { position: "top-center", theme: "dark" })
        }
        else {
            //   alert('item added successfully')
            let updatedobj={...ans,quantity:1}
            let copyArr = [...cartArr, updatedobj]
            setcartArr(copyArr)
            toast.success(' ADD to cart', { position: "top-center", theme: "colored" })
        }
    }
    function removeFromCart(ans, i) {
        let copyArr = [...cartArr]
        copyArr.splice(i, 1)
        setcartArr(copyArr)
        toast.info('remove items', { position: "top-center", theme: "dark" })
    }
    return (
        <div>
            <CartContext.Provider value={{ cartArr, setcartArr, addtoCart, removeFromCart }}>
                {props.children}
             
            </CartContext.Provider>
        </div>
    );
}

export default CartState;
