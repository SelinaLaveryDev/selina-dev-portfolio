import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProjectModal4(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Story Builder App
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>My Role</h4>
        <p>
          As a developer for the Story Builder app, I contributed to designing
          the user flow and collaborated closely with the team via online chats
          and meetings to ensure an intuitive user experience (UI). This
          collaboration allowed me to refine my understanding of UI/UX
          principles while working with others to align the app’s functionality
          with user needs.
        </p>
        <p>
          The app is a single-page application (SPA) that guides users through
          selecting their ideal LightForm model and imagining its use and
          setting. I handled both frontend and backend tasks, ensuring the UI
          was seamless and the app could track and store user selections without
          requiring login credentials. This presented a unique challenge, as it
          required maintaining states dynamically and securely storing user data
          without personal identifiers like names or dates of birth.
        </p>

        <h5>Skills Applied</h5>
        <ul>
          <li>
            <strong>Frontend Development</strong>: Created an intuitive SPA
            interface that updated dynamically based on user interactions.
          </li>
          <li>
            <strong>State Management</strong>: Managed and tracked multiple
            states to ensure seamless navigation and data consistency.
          </li>
          <li>
            <strong>Backend Development</strong>: Built functionality to store
            user data in the database without requiring authentication.
          </li>
          <li>
            <strong>Collaboration</strong>: Worked effectively with team members
            to design the user flow and prioritise a smooth UI experience.
          </li>
        </ul>

        <h5>Outcome</h5>
        <p>
          The Story Builder app provided a highly engaging and seamless user
          experience, enabling potential customers to explore LightForm models
          and imagine their applications. This project strengthened my skills in
          frontend and backend development, especially in handling state and
          database interactions in an SPA environment.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ProjectModal4;
