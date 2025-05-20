import React from 'react'
import './card.css'
const Card = () => {
  return (
    <section id='card'>
        <div className="blog-card container">
            <div className="cardies_images">
            <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp" alt="" />
        </div>
        <div className="cardies_content">
            <p>ABOUT TASTY</p>
            <h2 className='title'>Our chef cooks the most delicious food for you</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="parag">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
        </div>
    </section>
  )
}

export default Card