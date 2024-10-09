import React, { useRef } from 'react'
import "../CSS/portfolio.css"
import img1 from "../Assets/Taazakhabar.png"
import img2 from "../Assets/evanto.png"
import img3 from "../Assets/hobbycue.png"
import img4 from "../Assets/bloodchain.png"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"


const Portfolio = () => {

    const items=[
    {
        id:1,
        title:"Taazakhabar",
        img:img1,
        desc:"A react based application which will help you to know what is happening around you.",
    },
    {
        id:2,
        title:"Bloodchain",
        img:img4,
        desc:"A dapp which help in making the blood management system alot more transparent and secure",   
    },
    {
        id:3,
        title:"envato dashboard",
        img:img2,
        desc:"A daashboard prepared as an assignment for Heliverse",
        
    },
    {
        id:4,
        title:"HobbyCue dashboard",
        img:img3,
        desc:"A daashboard prepared as an assignment for banao ",
    },
];

    const Single =({item})=>{
      const ref =useRef()
      const {scrollYProgress}=useScroll(
        {
          target:ref,
          offset:["start start","end start"],
        }
      )
      const y=useTransform(scrollYProgress,[0,1],["10%","-350%"])
        return (
          <section ref={ref}>
          <div className="container">
            <div className="wrapper">
            <div className="imgContainer">
              <img src={item.img} alt="" height="100%"/>
            </div>
            <motion.div className="textcontainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </motion.div>
            </div>
          </div>
        </section>
        );    
    };

  const ref= useRef();
  const {scrollYProgress}=useScroll(
    {
      target:ref,
      offset:["end end","start start"],
    }
  )
  const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping: 40,
  });

  return (
    <motion.div className='portfolio' ref={ref}>
        <div className="progress">
            <h1 className='h1'>Some of my works</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      )

      )}
    </motion.div>
  )
}

export default Portfolio
