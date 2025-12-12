import Modal from "react-bootstrap/Modal";

export default function LearnMore2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="career-break-modal-title"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="career-break-modal-title">
          Career Break & Coding Journey
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Overview</h4>
        <p>
          During my career break to raise my two children, I also began a
          self-directed transition into software development. I spent my
          evenings and spare time learning to code through platforms such as
          Codecademy, freeCodeCamp and Udemy, building up a solid foundation in
          HTML, CSS and JavaScript.
        </p>
        <p>
          As my skills developed, I became increasingly committed to pursuing
          web development professionally. This led me to apply for the{" "}
          <strong>Software Engineering Immersive</strong> with{" "}
          <strong>General Assembly</strong>, a full-time intensive bootcamp that
          I completed in 2023.
        </p>

        <h4>Software Engineering Immersive (General Assembly)</h4>
        <p>
          The programme focused on modern full-stack development and covered:
        </p>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js, Express</li>
          <li>PostgreSQL, MongoDB</li>
          <li>Ruby, Rails</li>
          <li>Git, GitHub and Agile/Scrum</li>
        </ul>
        <p>
          I completed four main projects, working in both solo and team
          environments and reinforcing version control, collaboration and
          full-stack principles.
        </p>

        <h5>Fitness Tracker – Full Stack | MERN | Team Project (8 Days)</h5>
        <ul>
          <li>
            Built a full-stack fitness tracking app in a team of four using
            MongoDB, Express, React and Node.js.
          </li>
          <li>
            Implemented user authentication with encrypted password storage.
          </li>
          <li>Designed and developed the login and registration experience.</li>
          <li>Used Git and GitHub with feature branches and pull requests.</li>
        </ul>

        <h5>Budget Plan Pal – Full Stack | Ruby on Rails | Solo (7 Days)</h5>
        <ul>
          <li>
            Built a personal finance tracker using Ruby on Rails and PostgreSQL.
          </li>
          <li>Integrated Devise for secure user authentication.</li>
          <li>Used SASS to create structured, reusable styles.</li>
          <li>
            Deployed to Heroku, managing migrations and production config.
          </li>
        </ul>

        <h5>Weekend Away – Frontend | React | APIs | Solo (5 Days)</h5>
        <ul>
          <li>
            Created a React application to search UK restaurants using a
            third-party API.
          </li>
          <li>
            Implemented dynamic UI components and responsive design with
            Bootstrap.
          </li>
          <li>Managed API requests and component state.</li>
          <li>Deployed the frontend using GitHub Pages.</li>
        </ul>

        <h5>Tic-Tac-Toe – Frontend | JavaScript | Solo (6 Days)</h5>
        <ul>
          <li>
            Built a browser-based Tic-Tac-Toe game using HTML, CSS and vanilla
            JavaScript.
          </li>
          <li>
            Added interactivity using event listeners and DOM manipulation.
          </li>
          <li>Ensured a mobile-friendly layout with CSS media queries.</li>
          <li>Tracked iterations using Git and GitHub.</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}
