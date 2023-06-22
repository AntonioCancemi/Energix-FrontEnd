import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function ClienteForm() {
  const [ragioneSociale, setRagioneSociale] = useState("");
  const [email, setEmail] = useState("");
  const [pec, setPec] = useState("");
  const [fatturato, setFatturato] = useState("");
  const [telefono, setTelefono] = useState("");
  const [emailContatto, setEmailContatto] = useState("");
  const [nomeContatto, setNomeContatto] = useState("");
  const [cognomeContatto, setCognomeContatto] = useState("");
  const [telefonoContatto, setTelefonoContatto] = useState("");
  const [tipoAzienda, setTipoAzienda] = useState("");
  const [indirizzo, setIndirizzo] = useState({});

  return (
    <Container className="register-container mt-5">
      <h1 className="register-title">Register</h1>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label className="register-label">Ragione Sociale</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci Ragione Sociale"
            value={ragioneSociale}
            onChange={(e) => setRagioneSociale(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">E-mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">PEC</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci PEC"
            value={pec}
            onChange={(e) => setPec(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Fatturato annuale</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci Fatturato Annuale"
            value={fatturato}
            onChange={(e) => setFatturato(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci Telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Email Contatto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci Email Contatto"
            value={emailContatto}
            onChange={(e) => setEmailContatto(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Nome Contatto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci Nome Contatto"
            value={nomeContatto}
            onChange={(e) => setNomeContatto(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Cognome Contatto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci Nome Contatto"
            value={cognomeContatto}
            onChange={(e) => setCognomeContatto(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Telefono Contatto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci Telefono Contatto"
            value={telefonoContatto}
            onChange={(e) => setTelefonoContatto(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Label className="register-label">Tipo Azienda</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={tipoAzienda}
          onChange={(e) => setTipoAzienda(e.target.value)}
        >
          <option disabled>Scegli tra i vari tipi</option>
          <option>PA</option>
          <option>SAS</option>
          <option>SPA</option>
          <option>SRL</option>
        </Form.Select>

        <Button variant="primary" type="submit" className="register-button">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default ClienteForm;
