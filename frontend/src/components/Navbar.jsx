import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars3CenterLeft } from 'react-icons/hi2'
import { IoSearchOutline } from 'react-icons/io5'
import { HiOutlineHeart, HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi2'
import avatar from "../assets/avatar.png"
import { navigation } from "../constant/Arr"
import { useSelector } from 'react-redux'
import { useAuth } from '../context/AuthContext'


const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { cartItems } = useSelector(state => state.cart)
  const { currentUser, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center md:gap-16 gap-4'>
          <Link to={"/"}>
            <HiMiniBars3CenterLeft size={30} />
          </Link>

          <div className='relative sm:w-72 w-40 space-x-2'>
            <IoSearchOutline className='absolute inline-block left-3 inset-y-2' />
            <input type="text" placeholder='Search here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />
          </div>
        </div>

        <div className='relative flex items-center md:space-x-3 space-x-2'>
          <div className=''>
            {
              currentUser ?
                <>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img src={currentUser?.photoURL || avatar} alt="" className={`size-7 rounded-full ${currentUser ? "ring-2 ring-blue-500" : ""}`} />
                  </button>
                  {isDropdownOpen && (
                    <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                      <ul className='py-2'>
                        {
                          navigation.map((item) => (
                            <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                              <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>{item.name}</Link>
                            </li>
                          ))
                        }
                        <li>
                          <button onClick={handleLogout} className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100'>Logout</button>
                        </li>
                      </ul>
                    </div>
                  )}
                </> :
                <Link to={"/login"}><HiOutlineUser size={30} /></Link>
            }
          </div>
          <button className='hidden sm:block'>
            <HiOutlineHeart size={30} />
          </button>

          <Link to={"/cart"} className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md'>
            <HiOutlineShoppingCart size={24} />
            {
              cartItems?.length > 0 ? <span className='text-sm font-semibold sm:ml-1'>{cartItems?.length}</span>
                : <span className='text-sm font-semibold sm:ml-1'>0</span>
            }

          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar