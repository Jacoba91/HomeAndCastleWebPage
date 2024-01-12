import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

function HomePage() {
  return (
    <>
      <Container className="top-left-header">
        <Row>
          <Col xs={12} md={10} lg={8}>
            <h2>Secure Your Home and Castle.</h2>
          </Col>

          <Col>
            <Button type="primary">Ask a Lawyer</Button>
          </Col>
        </Row>
      </Container>

      <Container className="main-statement">
        <p>
            A Law Firm for Successful Business Law, Litigation, and Real Estate Solutions.
        </p>
      </Container>
    </>
  ); 
}

export default HomePage;