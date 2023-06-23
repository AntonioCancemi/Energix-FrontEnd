import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";

function FatturaBackOffice() {
  const [allFatture, setAllFatture] = useState([]);
  const [allClienti, setAllClienti] = useState([]);

  const handleFatture = () => {
    const url = "http://localhost:8080/api/fatture/all/1";

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllFatture(data);
        // Esegui altre azioni a seguito della chiamata POST
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClienti = () => {
    const url2 = "http://localhost:8080/api/clienti/all/1";

    fetch(url2, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllClienti(data);
        // Esegui altre azioni a seguito della chiamata POST
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleFatture();
    handleClienti();
  });

  return (
    <Container>
      <h1>Fatture del cliente x</h1>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={7}>
            <h2>Fatture Registrate</h2>
            {allFatture.map((fattura) => {
              return (
                <Row className="my-2">
                  <Col sm={4}>
                    <ListGroup>
                      <ListGroup.Item action href="#link1">
                        <Link
                          to={"/dettagliofattura/" + fattura.numeroFattura}
                          className="text-white"
                        >
                          {fattura.numeroFattura}
                        </Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      <Tab.Pane eventKey="#link1">
                        {fattura.cliente.ragioneSociale} - {fattura.importo}€ -{" "}
                        {fattura.statoFattura}
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              );
            })}
          </Col>
          <Col sm={5}>
            <h2>Clienti registrati</h2>
            {allClienti.map((cliente) => {
              return (
                <Row>
                  <Col className="my-1">
                    <ListGroup>
                      <ListGroup.Item action href="#link1">
                        <Link
                          to={"/dettagliocliente/" + cliente.idCliente}
                          className="text-white"
                        >
                          {cliente.ragioneSociale} di {cliente.nomeContatto}{" "}
                          {cliente.cognomeContatto}
                        </Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default FatturaBackOffice;
