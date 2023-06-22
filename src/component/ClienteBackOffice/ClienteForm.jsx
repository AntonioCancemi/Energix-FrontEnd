import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

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
  const [via, setVia] = useState("");
  const [civico, setCivico] = useState("");
  const [localita, setLocalita] = useState("");
  const [cap, setCap] = useState("");
  const [comune, setComune] = useState("");
  const [tipoIndirizzo, setTipoIndirizzo] = useState("");
  const [via2, setVia2] = useState("");
  const [civico2, setCivico2] = useState("");
  const [localita2, setLocalita2] = useState("");
  const [cap2, setCap2] = useState("");
  const [comune2, setComune2] = useState("");
  const [tipoIndirizzo2, setTipoIndirizzo2] = useState("");

  const handleRegister = (e) => {
    const url = "http://localhost:8080/api/clienti";
    const postData = {
      ragioneSociale: ragioneSociale,
      email: email,
      pec: pec,
      fatturatoAnnuale: fatturato,
      telefono: telefono,
      emailContatto: emailContatto,
      nomeContatto: nomeContatto,
      cognomeContatto: cognomeContatto,
      telefonoContatto: telefonoContatto,
      tipoCliente: tipoAzienda,
      indirizzi: [
        {
          via: via,
          civico: civico,
          localita: localita,
          cap: cap,
          comune: comune,
          tipoIndirizzo: tipoIndirizzo,
        },
        {
          via: via2,
          civico: civico2,
          localita: localita2,
          cap: cap2,
          comune: comune2,
          tipoIndirizzo: tipoIndirizzo2,
        },
      ],
    };
    console.log(postData);
    fetch(url, {
      method: "post",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYXZ5MTA0QGhvdG1haWwuaXQiLCJpYXQiOjE2ODc0NTA4MDgsImV4cCI6MTY4ODMxNDgwOH0.arYFOmdNP6G8ISB0cj2TwD0qXGc1_CTprPosszb01b4",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Cliente inserito correttamente!!"); // Stampa la risposta dal server
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
      <h1 className="register-title">Registra un Cliente</h1>
      <Form onSubmit={handleRegister}>
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
          <option>Scegli tra i vari tipi</option>
          <option>PA</option>
          <option>SAS</option>
          <option>SPA</option>
          <option>SRL</option>
        </Form.Select>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Via</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci la via"
            value={via}
            onChange={(e) => setVia(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Civico</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il civico"
            value={civico}
            onChange={(e) => setCivico(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Località</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci la località"
            value={localita}
            onChange={(e) => setLocalita(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Cap</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il cap"
            value={cap}
            onChange={(e) => setCap(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Comune</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il comune"
            value={comune}
            onChange={(e) => setComune(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Label className="register-label">Tipo Indirizzo</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={tipoIndirizzo}
          onChange={(e) => setTipoIndirizzo(e.target.value)}
        >
          <option>Scegli tra i vari tipi</option>
          <option>SEDE_OPERATIVA</option>
          <option>SEDE_LEGALE</option>
          <option>SEDE_UNICA</option>
        </Form.Select>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Via</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci la via"
            value={via2}
            onChange={(e) => setVia2(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Civico</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il civico"
            value={civico2}
            onChange={(e) => setCivico2(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Località</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci la località"
            value={localita2}
            onChange={(e) => setLocalita2(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Cap</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il cap"
            value={cap2}
            onChange={(e) => setCap2(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label className="register-label">Comune</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il comune"
            value={comune2}
            onChange={(e) => setComune2(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Label className="register-label">Tipo Indirizzo</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={tipoIndirizzo2}
          onChange={(e) => setTipoIndirizzo2(e.target.value)}
        >
          <option>Scegli tra i vari tipi</option>
          <option>SEDE_OPERATIVA</option>
          <option>SEDE_LEGALE</option>
          <option>SEDE_UNICA</option>
        </Form.Select>

        <Button variant="primary" type="submit" className="register-button">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default ClienteForm;
