import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EduModal2 (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
          Software Engineering Immersive
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>General Assembly (London, Remote)</h4>
        <p>
          Completed a 12-week immersive programme that covered the fundamentals
          of programming and computer science concepts. Key learning included:
        </p>
        <ul>
          <li>
            Developing full web applications using programming languages such as
            JavaScript, React, Ruby on Rails, and the MERN stack.
          </li>
          <li>
            Completed four projects applying real-world programming
            methodologies.
          </li>
          <li>
            Weekly assignments, daily stand-ups, and pair programming to foster
            collaboration and accountability.
          </li>
        </ul>
      </Modal.Body>      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EduModal2;