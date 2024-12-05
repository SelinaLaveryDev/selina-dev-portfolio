import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProjectModal5(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        IES V0 - Energy Sensor Data Viewer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>My Role</h4>
        <p>
          As the lead developer for the IES V0 project, I built a React Native application to visualise
          preliminary sensor data from Kionnali's Integrated Energy System. This was my first experience
          working with React Native, and I collaborated with the design team to align the app with
          existing branding while ensuring usability and responsiveness.
        </p>       
        <p>
          My primary focus was on building an intuitive interface for rendering dummy data in graphs,
          developing foundational components for future live data integration, and implementing
          navigation between the dashboard and individual system pages (e.g., Solar and Thermal).
        </p>

        <h5>Skills Applied</h5>
        <ul>
          <li><strong>Frontend Development</strong>: Built user-friendly interfaces using React Native.</li>
          <li><strong>Data Visualisation</strong>: Developed graph components to display sensor data dynamically.</li>
          <li><strong>State Management</strong>: Managed data flow and user interactions across pages.</li>
          <li><strong>Collaboration</strong>: Worked with co-founders and designers to ensure the app met project goals.</li>
          <li><strong>Wireframing</strong>: Updated and refined wireframes to reflect navigation and system changes.</li>
        </ul>

        <h5>Challenges and Achievements</h5>
        <p>
          Learning React Native for this project was a significant challenge, but it strengthened my
          understanding of cross-platform mobile development. I successfully built a scalable
          foundation for future app versions and introduced reusable components for graphing and
          navigation. This project highlighted my adaptability and problem-solving skills.
        </p>

        <h5>Future Enhancements</h5>
        <ul>
          <li>Integrating live data from the Integrated Energy System.</li>
          <li>Adding interactivity to graphs for deeper user engagement.</li>
          <li>Expanding the app to include additional IES pages, such as Water and Food Systems.</li>
        </ul>

        <h5>Wireframes</h5>
        <p>
          Below are the wireframes used for the project:
        </p>
        <img
          src="https://github.com/SelinaKionnali/IES_V0/blob/main/assets/documentation-imgs/IMG_3053%201.png?raw=true"
          alt="Dashboard Wireframe"
          className="img-fluid mb-3"
        />
        <img
          src="https://github.com/SelinaKionnali/IES_V0/blob/main/assets/documentation-imgs/Screenshot%202024-08-22%20at%2009.25.17%201.png?raw=true"
          alt="IES Section Wireframe"
          className="img-fluid"
        />

        <h5>Link</h5>
        <Button
          variant="secondary"
          style={{width: 'fit-content'}}
          href="https://github.com/SelinaKionnali/IES_V0"
          target="_blank"
        >
          View GitHub Repository
        </Button>      
        </Modal.Body>
    </Modal>
  );
}

export default ProjectModal5;