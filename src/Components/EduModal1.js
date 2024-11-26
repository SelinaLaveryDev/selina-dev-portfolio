import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EduModal1 (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
          Education
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>BA (Hons) Marketing & Communication</h4>
        <p>
          <strong>Glasgow Caledonian University</strong> 
        </p>
        <p>
        I achieved my <strong>Honours Degree with Distinction</strong> in Marketing, graduating as the <strong>winner of the Chartered Institute of Marketing Prize</strong> for outstanding performance in my cohort.        
        </p>
        <h3>Key Modules and Practical Experience</h3>
        <p>Throughout my degree, I studied a variety of modules, including:</p>
        <ul>
          <li>International Marketing</li>
          <li>Cognitive Communications</li>
          <li>Integrated Advertising</li>
          <li>Research Methods</li>
        </ul>
        <p>As part of my coursework, I gained hands-on experience by managing a live event for a real-world company. This project honed my ability to apply marketing theories to practical scenarios, manage stakeholders, and deliver measurable outcomes.</p>
        <h3>Dissertation Highlights</h3>
        <p>For my dissertation, I focused on advertising campaigns, specifically exploring the use of humour in advertising. This involved:</p>
        <ul>
          <li>Designing and conducting six focus groups to gather qualitative data.</li>
          <li>Analysing the results to test hypotheses and form key conclusions.</li>
          <li>Producing a well-researched, high-scoring dissertation that reflected my passion for creative marketing strategies.</li>
        </ul>
        <h3>Achievements</h3>
        <ul>
          <li><strong>Graduated with Distinction</strong>, recognising my dedication and academic excellence.</li>
          <li><strong>Awarded the Chartered Institute of Marketing Prize</strong>, a prestigious accolade for outstanding achievement in the field.</li>
        </ul>
      </Modal.Body>      
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EduModal1;