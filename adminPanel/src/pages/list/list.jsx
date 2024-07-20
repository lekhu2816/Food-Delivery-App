import React, { useEffect, useState } from 'react'
import './list.css'
import axios from 'axios'
import { toast } from "react-toastify";
const List = () => {
  const [list,setlist]=useState([]);
  const fetchData=async()=>{
    const URL=''
        const response=await axios.get('http://localhost:5001/api/food/list')   
        setlist(response.data.data)
  }
  const removeItem= async(foodId)=>{
   const response= await axios.post('http://localhost:5001/api/food/remove',{id:foodId})
   if(response.data.success){
    toast.success("Food item deleted")
    fetchData();
    
   }
   else{
    toast.error("Food item not deleted")
   }

  }
  useEffect(()=>{
     fetchData()
  },[])
  return (
    <div className='list'>
      <h2>All food list</h2>
      <div className="list-table">
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p>Action</p>
      </div>
      <hr />
      {
        list.map((item,index)=>{
         return(
          <div>
          <div className="list-table" key={index}>
          <img src={`http://localhost:5001/images/${item.image}`} alt="img"  />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>${item.price}</p>
          <p onClick={()=>{removeItem(item._id)}} className='cursor'>X</p>
       
        </div>
        <hr />
        </div>
      
      
         )
        })
      }
    </div>
  )
}

export default List