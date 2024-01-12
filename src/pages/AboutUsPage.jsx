import { Container, Row, Col, Button} from 'react-bootstrap';
function AboutUsPage() {
  return (
    <div className='about-page'>
      {/* Content for About Us page */}


      <Container className="top-left-header">
        <Row>
          <Col xs={12} md={10} lg={8}>
            <h2>About Us</h2>
          </Col>
        </Row>
      </Container>


      <Container className="bio">
            <p>We are a Toronto based law firm concentrating on business law, real estate and litigation.
              The staff at Home & Castle Law Firm are dedicated to providing our clients with exceptional legal services.<br/><br/>
              Gaining the results you need is the measure of our success. 
              Our staff seeks to develop a mutually rewarding partnership that grows from trust with each of our clients.
              This determined focus is what keeps our firm forging ahead in our areas of practice, including corporate law, 
              civil litigation, construction law, wills, real estate sales and purchases.<br/><br/>
              With a history of working with entrepreneurs and commercial enterprises, our staff is prepared to help you achieve 
              your goals and cultivate success.
              We have been instrumental in ground level business building and new business ventures. 
              Acting as legal counsellors, we will help you cultivate your business and provide solutions to any challenge that 
              stands in the way of your success.<br/><br/>
              We strive to make building your business, buying a home, or settling disputes easier.<br/><br/>
              Come in and see how we can help you!
            </p>
      </Container>
    </div>
  );
}

export default AboutUsPage;