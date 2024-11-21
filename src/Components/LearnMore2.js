import React from 'react'
import Button from 'react-bootstrap/Button';
import Prof2Modal from './Prof2Modal';

function LearnMore2() {
    const [modal2Show, setModal2Show] = React.useState(false);
  
    return (
      <>
        <Button variant="outline-secondary" onClick={() => setModal2Show(true)}>
          Learn More
        </Button>
  
        <Prof2Modal
          show={modal2Show}
          onHide={() => setModal2Show(false)}
        />
      </>
    );
  }

  export default LearnMore2;