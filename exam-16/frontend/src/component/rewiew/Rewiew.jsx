import React from 'react'
import './rewiew.css'
import { FaHeart } from "react-icons/fa6";
const Rewiew = () => {
  return (
    <section id='slides'>
        <div className="slides content">
            <div className="slides_parag">Customers Say</div>
            <div className="slides_title">REVIEW</div>
        </div>
        <div className="rewiew_image">
            <img src="https://preview.colorlib.com/theme/pato/images/avatar-04.jpg" alt=""  style={{borderRadius:"50%", width:"200px"}}/>
        </div>
        <div className="rewiew_parag">We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui</div>
        <div className="rewiew_icon"><FaHeart/>
        <FaHeart/><FaHeart/><FaHeart/><FaHeart/>
        </div>
        <div className="parag2">Marie Simmons - New York</div>
    </section>
  )
}

export default Rewiew