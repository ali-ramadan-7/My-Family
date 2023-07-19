import React, { Fragment } from 'react'
import MinSlide from './slidebar/slide'
import AboutFamily from './about-family/about-family'
import IconCard from './icon-card/icon-card'
import Slick from './slick/slick'
function Home() {
  return (
    <Fragment>
      <MinSlide/>
      <AboutFamily/>
      <IconCard/>
      <Slick/>
    </Fragment>
  )
}

export default Home
