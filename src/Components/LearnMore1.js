import React from 'react'
import Button from 'react-bootstrap/Button';
import Prof1Modal from './Prof1Modal';
import '../Sections/About.css'

function LearnMore1() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
          Learn More
        </Button>
  
        <Prof1Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default LearnMore1;