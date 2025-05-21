import React from 'react'
import "./blog.css"
const Blogies = () => {
  return (
    <section id='blog'>
     <div className="container">
           <div className="blog content">
            <div className="blog_title">THE BLOG</div>
            <div className="blog_parag">Latest News</div>
        </div>
        <div className="blog_cards">
             <div className="cardies">
                        <div className="card_image">
                            <img src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg" alt=""  style={{width:"100%", borderRadius:"8px"}}/>
                        </div>
                        <div className="card_content">
                            <div className="card_title">Best Places for Wine</div>
                            <div className="card_price">Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</div>
                        </div>
                    </div>

                      <div className="cardies">
                        <div className="card_image">
                            <img src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg" alt=""  style={{width:"100%", borderRadius:"8px"}}/>
                        </div>
                        <div className="card_content">
                            <div className="card_title">Best Places for Wine</div>
                            <div className="card_price">Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</div>
                        </div>
                    </div>


                      <div className="cardies">
                        <div className="card_image">
                            <img src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg" alt=""  style={{width:"100%", borderRadius:"8px"}}/>
                        </div>
                        <div className="card_content">
                            <div className="card_title">Best Places for Wine</div>
                            <div className="card_price">Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</div>
                        </div>
                    </div>
        </div>
     </div>
    </section>
  )
}

export default Blogies