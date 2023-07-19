import Card from 'react-bootstrap/Card';
import './person-card.css'
import PersonCard1 from '../../../img/person-card1.jpg'
import PersonCard2 from '../../../img/person-card2.jpg'
import PersonCard3 from '../../../img/person-card3.jpg'
import { Container } from 'react-bootstrap';
import {
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
function PersonCard() {
  return ( <Container className='person-cards'>
  <Card>
    <div className='in'>
        <Card.Img className='person-card-img' src={PersonCard1} alt="Card image" />
        <div className='social-person'>
        <MDBBtn     floating     className='m-1'    style={{ backgroundColor: '#3b5998' }}    href='#!'    role='button'>
            <MDBIcon fab icon='facebook-f' />
        </MDBBtn>
        <MDBBtn   floating    className='m-1'   style={{ backgroundColor: '#55acee' }}  href='#!'   role='button'>
            <MDBIcon fab icon='twitter' />
        </MDBBtn>
        <MDBBtn   floating    className='m-1'   style={{ backgroundColor: '#dd4b39' }}  href='#!'   role='button'>
            <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn   floating    className='m-1'   style={{ backgroundColor: '#ac2bac' }}  href='#!'   role='button'>
            <MDBIcon fab icon='instagram' />
        </MDBBtn>
        <MDBBtn   floating    className='m-1'   style={{ backgroundColor: '#0082ca' }}  href='#!'   role='button'>
            <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>
        </div>
    </div>
    <div className='text-h-info'> 
    <h4>Katz </h4>
    <h6>markting</h6>
    <p> Amet labore numquam corrupti est. Nostrum amet voluptas consectetur. Quam impedit enim aut nesciunt aut dicta quam exercitationem.magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p> 
    </div> </Card>
  <Card>
    <div className='in'>
        <Card.Img className='person-card-img' src={PersonCard2} alt="Card image" />
        <div className='social-person'>
        <MDBBtn     floating     className='m-1'    style={{ backgroundColor: '#3b5998' }}    href='#!'    role='button'>
            <MDBIcon fab icon='facebook-f' />
        </MDBBtn>
        <MDBBtn   floating    className='m-1'   style={{ backgroundColor: '#55acee' }}  href='#!'   role='button'>
            <MDBIcon fab icon='twitter' />
        </MDBBtn>
        <MDBBtn   floating    className='m-1'   style={{ backgroundColor: '#dd4b39' }}  href='#!'   role='button'>
            <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn   floating    className='m-1'   style={{ backgroundColor: '#ac2bac' }}  href='#!'   role='button'>
            <MDBIcon fab icon='instagram' />
        </MDBBtn>
        <MDBBtn   floating    className='m-1'   style={{ backgroundColor: '#0082ca' }}  href='#!'   role='button'>
            <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>
        </div>
    </div>
    <div className='text-h-info'> 
    <h4>Niall Katz </h4>
    <h6>programmer</h6>
    <p> Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p> 
    </div> </Card>
  <Card>
    <div className='in'>
        <Card.Img className='person-card-img' src={PersonCard3} alt="Card image" />
        <div className='social-person'>
        <MDBBtn     floating     className='m-1'    style={{ backgroundColor: '#3b5998' }}    href='#!'    role='button'>
            <MDBIcon fab icon='facebook-f' />
        </MDBBtn>
        <MDBBtn   floating    className='m-1'   style={{ backgroundColor: '#55acee' }}  href='#!'   role='button'>
            <MDBIcon fab icon='twitter' />
        </MDBBtn>
        <MDBBtn   floating    className='m-1'   style={{ backgroundColor: '#dd4b39' }}  href='#!'   role='button'>
            <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn   floating    className='m-1'   style={{ backgroundColor: '#ac2bac' }}  href='#!'   role='button'>
            <MDBIcon fab icon='instagram' />
        </MDBBtn>
        <MDBBtn   floating    className='m-1'   style={{ backgroundColor: '#0082ca' }}  href='#!'   role='button'>
            <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>
        </div>
    </div>
    <div className='text-h-info'> 
    <h4>Demi Lewis </h4>
    <h6>markting</h6>
    <p> Amet labore numquam corrupti est. Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p> 
    </div> </Card>
  </Container>
  );
}

export default PersonCard;