import React, { Fragment } from 'react'
import './icon-card.css'
import { Container } from 'react-bootstrap'
import { BiAt, BiBaseball, BiBowlHot, BiBriefcaseAlt2, BiCake, BiCamera, BiCameraMovie, BiCctv } from "react-icons/bi"
import { AiOutlineLine } from "react-icons/ai";


function OCard (props ){
    return (
        <Fragment>
        <div className='one-card'>
        <div className="m-card">
        <div className='picon'>{props.picon}</div>
        </div>
        <h3 className='prtitle'>{props.prtitle}</h3>
        <AiOutlineLine/>
        <p className='ptext'>{props.ptext}</p>
        </div>
        </Fragment>
    )
}
function IconCard() {
    return ( 
        <Container className='om-card' >
        <OCard picon=<BiAt/> prtitle="Contact" ptext="Minim veniam, aliquip ex ea commodo consequat tarad limino"/>
        <OCard picon=<BiBaseball/> prtitle="Sport" ptext="Minim veniam, aliquip ex ea commodo consequat tarad limino"/>
        <OCard picon=<BiBowlHot/> prtitle="Gathering" ptext="Minim veniam, aliquip ex ea commodo consequat tarad limino"/>
        <OCard picon=<BiBriefcaseAlt2/> prtitle="Jop" ptext="Minim veniam, aliquip ex ea commodo consequat tarad limino"/>
        <OCard picon=<BiCake/> prtitle="Occasion" ptext="Minim veniam, aliquip ex ea commodo consequat tarad limino"/>
        <OCard picon=<BiCamera/> prtitle="Camera" ptext="Minim veniam, aliquip ex ea commodo consequat tarad limino"/>
        <OCard picon=<BiCameraMovie/> prtitle="Movie" ptext="Minim veniam, aliquip ex ea commodo consequat tarad limino"/>
        <OCard picon=<BiCctv/> prtitle="Settings" ptext="Minim veniam, aliquip ex ea commodo consequat tarad limino"/>
        
    
    </Container>  
  )
}

export default IconCard
