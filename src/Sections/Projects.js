import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import '../Sections/About.css'
import kionnaliAppProt from '../assets/app-prot.png'

function Projects() {
  return (
    <Container className="my-5">
    <section id='about'>
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className='title'>Projects</h1>
            <Card className="text-center shadow-lg" style={{ border: "none", padding: "20px" }}>
            <Card.Img variant="top" src={kionnaliAppProt} style={{height: '100%'}} />
            <Card.Body>
                <Card.Title>Kionnali App Prototype</Card.Title>
                <Card.Text>
                An interactive app prototype built using React to demonstrate platform features such as sign-in, dashboard, command centre, and community pages to stakeholders.
                </Card.Text>
                <div className='btn-container'>
                <Button className="btn btn-colour-2" variant="outline-secondary">Github</Button>
                <Button className="btn btn-colour-1" variant="outline-secondary">View Demo</Button>
                </div>
            </Card.Body>
            </Card>
            <br></br>
            <Card className="text-center shadow-lg" style={{ border: "none", padding: "20px" }}>
            <Card.Img variant="top" src={kionnaliAppProt} style={{height: '100%'}} />
            <Card.Body>
                <Card.Title>Kionnali Website</Card.Title>
                <Card.Text>
                An interactive app prototype built using React to demonstrate platform features such as sign-in, dashboard, command centre, and community pages to stakeholders.
                </Card.Text>
                <div className='btn-container'>
                <Button className="btn btn-colour-2" variant="outline-secondary">Github</Button>
                <Button className="btn btn-colour-1" variant="outline-secondary">View Demo</Button>
                </div>
            </Card.Body>
            </Card>
            <Card className="text-center shadow-lg" style={{ border: "none", padding: "20px" }}>
            <Card.Img variant="top" src={kionnaliAppProt} style={{height: '100%'}} />
            <Card.Body>
                <Card.Title>Kionnali App Prototype</Card.Title>
                <Card.Text>
                An interactive app prototype built using React to demonstrate platform features such as sign-in, dashboard, command centre, and community pages to stakeholders.
                </Card.Text>
                <div className='btn-container'>
                <Button className="btn btn-colour-2" variant="outline-secondary">Github</Button>
                <Button className="btn btn-colour-1" variant="outline-secondary">View Demo</Button>
                </div>
            </Card.Body>
            </Card>
    </section>
    </Container>
  );
}

export default Projects;