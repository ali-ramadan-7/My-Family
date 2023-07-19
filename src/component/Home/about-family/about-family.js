import React, { Fragment } from 'react'
import aboutf1 from "../../../img/aboutfamily1.jpg"
import { Container ,Button } from 'react-bootstrap'
import './about-family.css'
import { BiCheckDouble } from 'react-icons/bi';
import Title from '../../title/title';

const AboutFamily = () => {
  return (
    <Fragment>
    <Title text='About Family'/>
    <Container className='mt-5 about-f'>
    <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh.
    Orci convallis pulvinar urna fusce at purus neque nam leo? Suspendisse semper facilisi
    parturient sit euismod placerat. Orci ante luctus praesent torquent orci commodo aptent blandit.
    Placerat arcu dui potenti; nullam taciti taciti amet.</p>
    <div className='row '>
    <img className='col-lg-5 col-md-12' src={aboutf1} alt="my Family" />
    <div className='col-lg-7 col-md-12'>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh.
      Orci convallis pulvinar urna fusce at purus neque nam leo? </p>
      
      <div className='d-flex no-wrap gap-'>   
      <BiCheckDouble className = 'mr-2 '/>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
      </div>
      <div className='d-flex no-wrap gap-'>
      <BiCheckDouble className = 'mr-2 '/>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
      </div>
      <div className='d-flex no-wrap gap-'> <BiCheckDouble className = 'mr-2 '/>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
      </div>
      <p className='details'>Suspendisse semper facilisi
      parturient sit euismod placerat. Orci ante luctus praesent torquent orci commodo aptent blandit.
      Placerat arcu dui potenti; nullam taciti taciti amet.</p></div>
    </div>
    <Button className='about-f-button' variant="outline-primary" href ='/story'> Learn More </Button>{''}
    </Container>
    </Fragment>
  )
}

export default AboutFamily
