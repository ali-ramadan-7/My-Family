import React, { Fragment } from 'react'
import './gallery.css'
import SecNav from '../secnav/secnav'
import ga1 from '../../img/gallery1.jpg'
import ga2 from '../../img/aboutfamily1.jpg'
import ga3 from '../../img/event-image1.jpg'
import ga4 from '../../img/event-image3.jpg'
import ga5 from '../../img/person-card1.jpg'
import ga6 from '../../img/slick-3.jpg'
import ga7 from '../../img/slide-3.jpg'
import ga8 from '../../img/slick-8.jpg'
import ga9 from '../../img/slick-4.png'
import ga10 from '../../img/story7.jpg'
import ga11 from '../../img/story6.jpg'
import ga12 from '../../img/person-card3.jpg'
import ga13 from '../../img/event-image2.jpg'
import ga14 from '../../img/event-image4.jpg'
import ga15 from '../../img/person-card2.jpg'
import ga16 from '../../img/slick-5.jpg'
import ga17 from '../../img/slide-4.png'
import ga18 from '../../img/slick-6.jpg'
import ga19 from '../../img/slick-2.jpg'
import ga20 from '../../img/story4.jpg'
import { Container } from 'react-bootstrap'

function Gallery() {
  return (
    <Fragment>
    <SecNav text='Gallery' parent='Home' child='Gallery'/>
    <Container className='gallery'>
    <img src={ga1} alt='img gallery'/>
    <img src={ga2} alt='img gallery'/>
    <img src={ga3} alt='img gallery'/>
    <img src={ga4} alt='img gallery'/>
    <img src={ga5} alt='img gallery'/>
    <img src={ga6} alt='img gallery'/>
    <img src={ga7} alt='img gallery'/>
    <img src={ga8} alt='img gallery'/>
    <img src={ga9} alt='img gallery'/>
    <img src={ga10} alt='img gallery'/>
    <img src={ga11} alt='img gallery'/>
    <img src={ga12} alt='img gallery'/>
    <img src={ga13} alt='img gallery'/>
    <img src={ga14} alt='img gallery'/>
    <img src={ga15} alt='img gallery'/>
    <img src={ga16} alt='img gallery'/>
    <img src={ga17} alt='img gallery'/>
    <img src={ga18} alt='img gallery'/>
    <img src={ga19} alt='img gallery'/>
    <img src={ga20} alt='img gallery'/>
    </Container>
    </Fragment>
  )
}

export default Gallery
