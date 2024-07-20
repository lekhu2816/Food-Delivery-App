import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import Exploremenu from '../../components/exploremenu/exploremenu'
import Displayfood from '../../components/displayFood/displayfood'
import Appdownload from '../../components/appdownload/appdownload'
const Home = () => {
  const[category,setCategory]=useState("All")
  console.log(category)
  return (
    <div className='home'>
     <Header/>
     <Exploremenu category={category} setCategory={setCategory}/>
     <Displayfood category={category}/>
     <Appdownload></Appdownload>
    </div>
  )
}

export default Home;