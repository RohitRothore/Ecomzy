import React from 'react'
import {RiDeleteBin5Fill} from "react-icons/ri"
import { useDispatch } from 'react-redux'
import { remove } from '../redux/CartSlice'
import { toast } from 'react-hot-toast'

const CartItem = ({item,  itemIndex}) => {

  const dispatch = useDispatch()
  const removeFromCart = () =>{
    dispatch(remove(item.id))
    toast.error("Item Removed From Cart")
  }
  return (
    <div>
      <div className='flex gap-10 justify-center items-center mt-8 mb-5 pb-5 border-b-2 border-b-gray-500'>
        <div className=" h-[180px]">
          <img src={item.image} alt='logo'  className=" h-full w-full"/>
        </div>
        <div className='flex flex-col max-w-sm gap-5'>
          <h1 className=" text-gray-700 font-semibold text-xl text-left">{item.title}</h1>
          <h1 className=" text-gray-400 font-normal text-sm text-left">{item.description.split(" ").slice(0,17).join(" ") + "..."}</h1>
          <div className='flex justify-between items-center pr-10'>
            <p className=" text-green-600 font-semibold  ">${item.price}</p>
            <div onClick={removeFromCart} className='h-10 w-10 rounded-full bg-red-300 flex justify-center items-center cursor-pointer'>
              <RiDeleteBin5Fill className=' text-red-800  '/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem