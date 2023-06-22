import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Row className="text-center mt-5 bg-dark text-white fixed-bottom">
        <Col xs={12}>
          <div>Copyright Energx - Tutti i diritti riservati - P.IVA 1234567890</div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
