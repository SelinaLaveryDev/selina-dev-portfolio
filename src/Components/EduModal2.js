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
          Completed a 12-week immersive programme that covered the fundamentals of
          programming and computer science concepts. Key learning included:
        </p>
        <ul>
          <li>
            Developing full web applications using JavaScript, React, Ruby on Rails, and the MERN stack.
          </li>
          <li>
            Applying real-world programming methodologies through four hands-on projects.
          </li>
          <li>
            Strengthening collaboration and accountability through weekly assignments, daily stand-ups, and pair programming.
          </li>
        </ul>
        <h3>Key Projects</h3>
        <ul>
          <li>
            <strong><a href='https://github.com/SelinaLaveryDev/Project4-Budget-Plan-pal'>Budget Plan Pal</a></strong>:
            Built a full-stack Ruby on Rails app with PostgreSQL for database management, full CRUD functionality, and secure authentication using Devise. Styled with SASS for a polished UI.
          </li>
          <li>
            <strong><a href='https://github.com/SelinaLaveryDev/SEI-Project-3'>Fitness Tracker</a></strong>:
            Developed a full-stack MERN application as part of a team, contributing to user profile functionality and backend authentication. Used React for the front-end and Node.js, Express, and MongoDB for the back-end.
          </li>
          <li>
            <strong><a href='https://github.com/SelinaLaveryDev/React-List-App'>Weekend Away</a></strong>:
            Created a React app interacting with a public API to display restaurant information in a clear, styled table format. Leveraged Bootstrap for responsive design.
          </li>
          <li>
            <strong><a href='https://github.com/SelinaLaveryDev/Portfolio-1-tictactoe'>Tic-Tac-Toe</a></strong>:
            Developed a grid-based game using HTML, CSS, and Vanilla JavaScript, focusing on planning, pseudocode, and applying functions and array methods.
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EduModal2;