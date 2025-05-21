import React from 'react'
import './search.css'
import { SlEnvolopeLetter } from "react-icons/sl";
const Search = () => {
  return (
    <section id='search'>
        <h2>SPECIALS SIGN UP</h2>
       <div className="search_input">
         <input type="text" className='input' placeholder='email Adress'/>
         <SlEnvolopeLetter/>
       </div>
        <button className='search_btn'>Sing up</button>
    </section>
  )
}

export default Search