import React from 'react'
import Button from 'react-bootstrap/Button';
import Prof4Modal from './Prof4Modal';

function LearnMore4() {
    const [modal4Show, setModal4Show] = React.useState(false);
  
    return (
      <>
        <Button variant="outline-secondary" onClick={() => setModal4Show(true)}>
          Learn More
        </Button>
  
        <Prof4Modal
          show={modal4Show}
          onHide={() => setModal4Show(false)}
        />
      </>
    );
  }

  export default LearnMore4;