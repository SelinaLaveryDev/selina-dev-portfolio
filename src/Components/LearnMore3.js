import React from 'react'
import Button from 'react-bootstrap/Button';
import Prof3Modal from './Prof3Modal';

function LearnMore3() {
    const [modal3Show, setModal3Show] = React.useState(false);
  
    return (
      <>
        <Button variant="outline-secondary" onClick={() => setModal3Show(true)}>
          Learn More
        </Button>
  
        <Prof3Modal
          show={modal3Show}
          onHide={() => setModal3Show(false)}
        />
      </>
    );
  }

  export default LearnMore3;