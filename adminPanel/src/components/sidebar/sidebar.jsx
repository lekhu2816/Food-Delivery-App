import React from 'react'
import './sidebar.css'
import addIcon from '../../assets/addIcon.png'
import listItem from '../../assets/listItem.png'
import order from '../../assets/order.jpg'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to={'/add'} className="sidebar-option">
                <img src={addIcon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to={'/list'} className="sidebar-option">
                <img src={listItem} alt="" />
                <p>List Item</p>
            </NavLink>
            <NavLink to={'/orders'} className="sidebar-option">
                <img src={order} alt=""  />
                <p>Order</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar