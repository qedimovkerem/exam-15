import React from 'react'
import Hero from '../component/hero/Hero'
import Products from '../component/products/Products'
import Rewiew from '../component/rewiew/Rewiew'
import Blogies from '../component/blog/Blogies'
import Search from '../component/searc/Search'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Products/>
      <Rewiew/>
      <Blogies/>
      <Search/> 
    </div>
  )
}

export default Home