import React from 'react'
import Card from 'react-bootstrap/Card';
import './About.css'
import CardGroup from 'react-bootstrap/CardGroup';
import experienceIcon from '../assets/experience.png'
import educationIcon from '../assets/education.png'
import Badge from 'react-bootstrap/Badge';
import LearnMore1 from '../Components/LearnMore1';
import LearnMore2 from '../Components/LearnMore2';
import LearnMore3 from '../Components/LearnMore3';
import LearnMore4 from '../Components/LearnMore4';
import LearnMore5 from '../Components/LearnMore5';
import LearnMore6 from '../Components/LearnMore6';


export default function About() {
  return(
    <section id='about'>
     <p className="section__text__p1">Get to know more</p>
     <h1 className='title'>About Me</h1>
     <h1>
      <Badge bg="secondary">Professional Experience</Badge>
     </h1>
        <div className='section-container'>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={experienceIcon} className='icon' />
        <Card.Body>
          <Card.Title>Software Developer</Card.Title>
          <Card.Text>
            Kionnali Living Systems Ltd
          </Card.Text>
          <LearnMore1 />
          </Card.Body>
        <Card.Footer>
          <small className="text-muted">Oct 2023 - Present</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={experienceIcon} className='icon'/>
        <Card.Body>
          <Card.Title>Career Break</Card.Title>
          <Card.Text>
            Raising two children.
          </Card.Text>
          <LearnMore2/>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">2014 - 2023</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={experienceIcon } className='icon'/>
        <Card.Body>
          <Card.Title>Operational Trainer</Card.Title>
          <Card.Text>
            BSKYB
          </Card.Text>
          <LearnMore3/>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Nov 2011 - Feb 2014</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={experienceIcon } className='icon'/>
        <Card.Body>
          <Card.Title>Regional Trainer</Card.Title>
          <Card.Text>
            Lloyds Banking Group
          </Card.Text>
          <LearnMore4/>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Oct 2010 - Oct 2011</small>
        </Card.Footer>
      </Card>
    </CardGroup>    
    <br></br>
    <h1>
      <Badge bg="secondary">Education</Badge>
     </h1>

        <CardGroup>
      <Card>
        <Card.Img variant="top" src={educationIcon} className='icon'/>
        <Card.Body>
          <Card.Title>BA(<em>Hons</em>) Marketing & Communications</Card.Title>
          <Card.Text>
          Glasgow Caledonian University         
           </Card.Text>
           <LearnMore5/>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">1999 - 2003</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={ educationIcon} className='icon' />
        <Card.Body>
          <Card.Title>Software Engineering Immersive Programme</Card.Title>
          <Card.Text>
            General Assembly
          </Card.Text>
          <LearnMore6/>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Dec 2022 - May 2023</small>
        </Card.Footer>
      </Card>
    </CardGroup>          
    </div>
    </section>
  )
  
}