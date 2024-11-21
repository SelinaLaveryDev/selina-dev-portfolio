import React from 'react'
import Button from 'react-bootstrap/Button';
import EduModal1 from './EduModal1';

function LearnMore5() {
    const [modal5Show, setModal5Show] = React.useState(false);
  
    return (
      <>
        <Button variant="outline-secondary" onClick={() => setModal5Show(true)}>
          Learn More
        </Button>
  
        <EduModal1
          show={modal5Show}
          onHide={() => setModal5Show(false)}
        />
      </>
    );
  }

  export default LearnMore5;