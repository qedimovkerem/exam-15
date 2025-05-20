import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <section id='hero'>
        <div className="hero_content">
            <h1 className='hero_title'>Book a table for yourself at a time convenient for you</h1>
            <button className='hero_btn'>Book A Table</button>
        </div>
        <div className="hero_form">
            <form>
                <input type="text" className="input" />
                <input type="tel" className="input" />
                <input type="date" className="input" />
                <input type="time" className="input" />
                <select name="" id="">
                    <option>person</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button className='hero_input_btn'>Book aTable</button>
            </form>
        </div>
    </section>
  )
}

export default Hero