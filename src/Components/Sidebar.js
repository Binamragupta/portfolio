import React, { useState } from 'react'
import {motion} from "framer-motion"
import "../CSS/sidebar.css"
import Links from './Links'
import Togglebutton from './Togglebutton'

const Sidebar = () => {
    const [open,setopen]=useState(false)

    const variants={
        open:{
            clipPath:"circle(1200px at 50px 45px)",
            transition:{
                type:"spring",
                stiffness:20,
            },
        },
        closed:{
            clipPath:"circle(30px at 50px 45px)",
            transition:{
                delay:0,
                type:"spring",
                stiffness:400,
                damping:40,
            },
        },
    };
  return (
    <motion.div className='sidebar'animate={open?"open":"closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <Togglebutton setopen={setopen}/>
    </motion.div>
  )
}

export default Sidebar
