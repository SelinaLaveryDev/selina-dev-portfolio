import React from 'react'
import Button from 'react-bootstrap/Button';
import EduModal2 from './EduModal2';

function LearnMore6() {
    const [modal6Show, setModal6Show] = React.useState(false);
  
    return (
      <>
        <Button variant="outline-secondary" onClick={() => setModal6Show(true)}>
          Learn More
        </Button>
  
        <EduModal2
          show={modal6Show}
          onHide={() => setModal6Show(false)}
        />
      </>
    );
  }

  export default LearnMore6;