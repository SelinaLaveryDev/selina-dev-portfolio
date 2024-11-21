import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Prof2Modal (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Career Break
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Full-Time Mother</h4>
        <p>
          Chose to step away from my career to raise my children, now aged 9 and 11. Highlights during this period:
        </p>
        <ul>
          <li>
            Explored a passion for writing, completing courses with The Writers
            College and publishing three short stories with online magazines.
          </li>
          <li>
            Contributed to online magazines and featured in a podcasts, showcasing my
            writing skills.
          </li>
        </ul>
      </Modal.Body>      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Prof2Modal;