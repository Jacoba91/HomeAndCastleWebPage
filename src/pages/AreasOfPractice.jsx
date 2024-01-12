import { Container, Row, Col, Button} from 'react-bootstrap';

function AreasOfPractice() {
  return (
    <div className='areas-of-practice'>
        {/* Fix path routing issue for navbar */}
        <Container className="top-left-header">
        <Row>
          <Col xs={12} md={10} lg={8}>
            <h2>Areas of Practice</h2>
          </Col>
        </Row>
      </Container>


      <Container className="bio">
            <h3>Civil Litigation</h3>
            <p>
                text here
            </p>
      </Container>
    </div>
  );
}

export default AreasOfPractice;