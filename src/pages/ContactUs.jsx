import { Container, Row, Col, Button} from 'react-bootstrap';

function ContactUs() {
  return (
    <div className='contact-us'>
        {/* Fix path routing issue for navbar */}
        <Container className="top-left-header">
        <Row>
          <Col xs={12} md={10} lg={8}>
            <h2>Contact Us</h2>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default ContactUs;