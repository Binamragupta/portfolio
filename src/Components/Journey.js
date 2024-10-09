import {  useState } from "react";
import "../CSS/journey.css"
import { FaCircleArrowRight } from "react-icons/fa6";
import {motion} from "framer-motion";
import img1 from "../Assets/IBMcloud.png"
import img2 from "../Assets/blooddonation.jpg"
import img3 from "../Assets/codecrusade.jpg"
import img4 from "../Assets/devtown.png"
import img5 from "../Assets/ehcworkshop.png"
import img6 from "../Assets/gate.png"
import img7 from "../Assets/git_githubworkshop.png"
import img8 from "../Assets/hackerrank.png"
import img9 from "../Assets/ibmdatascience.png"
import img10 from "../Assets/intershipstudio.png"
import img11 from "../Assets/linuxworld.jpg"
import img12 from "../Assets/microsoftlearnambassador.png"
import img13 from "../Assets/nistproblemsolving.jpg"
import img14 from "../Assets/nxtwave.png"
import img15 from "../Assets/pwc.png"
import img16 from "../Assets/pythonnptel.png"
import img17 from "../Assets/udemy js.jpg"
import { filter } from "framer-motion/client";


const Journey = () => {
  const [positionIndex,setpositionIndex]=useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
  const handlenext=()=>{
    setpositionIndex((prevIndex)=>{
      const updatedIndexes=prevIndex.map((prevIndex)=>(prevIndex+1)%17)
      return updatedIndexes
    })
  }
  const images=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17];
  const positions=['center','left1','left','right','right1','rest','rest','rest','rest','rest','rest','rest','rest','rest','rest','rest','rest','rest'];
  const imagevariant={
    center:{x:'0%',scale:1,zIndex:5},
    left1:{x:'-50%',scale:0.7,zIndex:2},
    left:{x:'-90%',scale:0.5,zIndex:1},
    right:{x:'90%',scale:0.5,zIndex:1},
    right1:{x:'50%',scale:0.7,zIndex:2},
    rest:{opacity:0,zIndex:0}
  }


  return (
    <>
    <div className="h1j"><h1 className="textj">My Certification and Achievements</h1></div>
    <motion.div className='journey'>
      
        <div className="imgjwrapper">
        <div className="imagecontainer">
            {images.map((image,index)=>(
                <motion.img key={index} 
                src={image} alt={image}
                className="imagej"
                initial="center"
                animate={positions[positionIndex[index]]}
                variants={imagevariant}
                transition={{duration:0.5}}
                
                />
              ))}

        </div>
        </div> 
       <div>
       <button className="buttonj" onClick={handlenext}><FaCircleArrowRight size={40}/></button>
       </div>

    </motion.div>
    
    </>
  )
}

export default Journey
