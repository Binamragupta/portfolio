import React from 'react'
import "../CSS/Navbar.css"
import {motion} from "framer-motion"


import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";
import Sidebar from './Sidebar';


const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
      <div className="wrappernav">
        <span className='spannav'></span>
        <div className="social">
            <motion.a href="https://www.instagram.com/binamra_gupta/?next=%2F" target='_blank' whileHover={{scale:1.4}} whileTap={{scale:0.95}}><FaSquareInstagram className='icon'size={27}/></motion.a>
            <motion.a href="https://github.com/Binamragupta" target='_blank' whileHover={{scale:1.4}} whileTap={{scale:0.95}}><FaGithubSquare className='icon'size={27}/></motion.a>
            <motion.a href="https://www.linkedin.com/in/binamra-gupta-91aa9927b/" target='_blank' whileHover={{scale:1.4}} whileTap={{scale:0.95}}><FaLinkedin className='icon'size={27}/></motion.a>
            <motion.a href="https://leetcode.com/u/guptabinamra/" target='_blank' whileHover={{scale:1.4}} whileTap={{scale:0.95}}><SiLeetcode className='icon'size={27}/> </motion.a>
            <motion.a href="https://www.hackerrank.com/profile/guptabinamra" target='_blank' whileHover={{scale:1.4}} whileTap={{scale:0.95}}><FaHackerrank className='icon'size={27}/> </motion.a>
            {/*  */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
