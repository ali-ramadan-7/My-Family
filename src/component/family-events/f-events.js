import Card from 'react-bootstrap/Card';
import './f-events.css'
import EventImg1 from '../../img/event-image1.jpg'
import EventImg2 from '../../img/event-image2.jpg'
import EventImg3 from '../../img/event-image3.jpg'
import EventImg4 from '../../img/event-image4.jpg'
import { Container } from 'react-bootstrap';
import { Fragment } from 'react';
import SecNav from '../secnav/secnav';



function FEvent() {
  return ( 
    <Fragment>
    <SecNav text='Events' parent='Home' child='Events'/>
    <Container className='event-cards'>
  <Card>
        <div className='ecard-img'>
        <Card.Img className='event-card-img' src={EventImg1} alt="Card image" />
        </div>
    <div className='event-info'> 
    <h4>James 2th Birthday </h4>
    <h6>Sunday, November 15th at 7:00 pm</h6>
    <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p> 
    </div> 
    </Card>
  <Card>
     <div className='ecard-img'>
        <Card.Img className='event-card-img' src={EventImg2} alt="Card image" />
        </div>
    <div className='event-info'> 
    <h4>Jack 6th Birthday </h4>
    <h6>Sunday, November 1th at 7:00 pm</h6>
    <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p> 
    </div> </Card>
  <Card>   
        <div className='ecard-img'>
        <Card.Img className='event-card-img' src={EventImg3} alt="Card image" />
        </div>
    <div className='event-info'> 
    <h4>Tom & Luna 1th anniversary </h4>
    <h6>Sunday, November 15th</h6>
    <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p> 
    </div> </Card>
  <Card>     
     <div className='ecard-img'>
        <Card.Img className='event-card-img' src={EventImg4} alt="Card image" /> 
        </div>
    <div className='event-info'> 
    <h4>Emma 4th Birthday </h4>
    <h6>Sunday, November 15th at 12:00 am</h6>
    <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p> 
    </div> </Card>
    </Container>
    </Fragment>
  );
}

export default FEvent;