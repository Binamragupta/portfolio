import React from 'react'
import "../CSS/hero.css"
import img from "../Assets/me.png"
import { CgScrollV } from "react-icons/cg";
import { useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';

const MyHero = () => {

    const [typeEffect] =useTypewriter({
        words:['React Dev','Blockchain Dev','UI UX Designer','Java Coding Enthusiast'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40,
    })

    const textVariants={
        initial:{
            x:-500,
            opacity:0,
        },
        animate:{
            x:-0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.1,
            },
        },
    }
    const sliderVariants={
        initial:{
            x:0,
        },
        animate:{
            x:"-1520%",
            transition:{
                repeat:Infinity,
                repeatType:"mirror",
                duration:110,
            },
        },
    }

  return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>BINAMRA GUPTA</motion.h2>
            <motion.h1 variants={textVariants}>I'm a {typeEffect}</motion.h1>
            <motion.div className="buttons" variants={textVariants}>
                <motion.button variants={textVariants}>Contact info below </motion.button>
            </motion.div>
            <div className='scrollicon' ><CgScrollV size={30} /></div>
        </motion.div>
    </div>
    <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Front End Developer UI UX Developer Blockchain Developer Java Coder
    </motion.div>
      <div className="imageContainer">
        <img src={img} alt="" className='image' />
      </div>
    </div>
  )
}

export default MyHero
