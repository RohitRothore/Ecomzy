import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {

  const {cart} = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0)
  console.log("Printing Cart")
  console.log(cart)
  useEffect(() =>{
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price,0));

  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ? (<div  className='flex  max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] relative justify-between'>
          <div>
            {
              cart.map((item, index) =>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div> 

          <div className='flex flex-col justify-between max-h-[70vh] '>
            <div className=''>
              <div className=' text-gray-700 font-semibold text-xl'>Your Cart</div>
              <div className=' text-green-600 text-5xl font-semibold uppercase'>Summary</div>
              <p>
                <span className=' text-gray-700 font-semibold text-xl'>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className=' max-w-sm space-y-3'>
              <p className=' text-gray-700  text-xl'>Total Amount: <span className='font-bold text-black'>${totalAmount}</span></p>
              <button className=' w-full bg-green-600 text-white font-semibold py-2 border-none outline-none rounded-md'>CheckOut Now</button>
            </div>
          </div>
        </div>) : (<div className=' min-h-screen flex flex-col justify-center items-center gap-5'>
          <h1 className=' text-gray-600 font-semibold text-lg'>Cart Empty</h1>
          <Link to="/">
            <button  className=' w-60 bg-green-600 text-white font-semibold py-2 border-none outline-none rounded-md '>
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Cart