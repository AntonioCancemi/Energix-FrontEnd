import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function FatturaForm() {
  const [numeroFattura, setNumeroFattura] = useState("");
  const [annoFattura, setAnnoFattura] = useState("");
  const [dataFattura, setDataFattura] = useState("");
  const [importo, setImporto] = useState("");
  const [statoFattura, setStatoFattura] = useState("");
  const [cliente, setCliente] = useState("");

  const handleRegister = (e) => {
    const url = "http://localhost:8080/api/fatture";
    const postData = {
      numeroFattura: numeroFattura,
      anno: annoFattura,
      dataFattura: dataFattura,
      importo: importo,
      statoFattura: statoFattura,
      idCliente: cliente,
    };
    console.log("ciao");

    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Fattura inserita correttamente"); // Stampa la risposta dal server
        // Esegui altre azioni a seguito della chiamata POST
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
    // Logica di registrazione qui...
  };

  return (
    <Container className="register-container mt-5">
      <h1 className="register-title">Registra una Fattura</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formName">
          <Form.Label className="register-label">Numero Fattura</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci Numero Fattura"
            value={numeroFattura}
            onChange={(e) => setNumeroFattura(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Anno Fattura</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci Anno Fattura"
            value={annoFattura}
            onChange={(e) => setAnnoFattura(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Data Fattura</Form.Label>
          <Form.Control
            type="date"
            placeholder="Inserisci email"
            value={dataFattura}
            onChange={(e) => setDataFattura(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Importo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci Importo"
            value={importo}
            onChange={(e) => setImporto(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Label className="register-label">Stato Fattura</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={statoFattura}
          onChange={(e) => setStatoFattura(e.target.value)}
        >
          <option>Scegli tra i vari tipi</option>
          <option>PAGATO</option>
          <option>NONPAGATO</option>
        </Form.Select>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Cliente</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="register-button">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default FatturaForm;
