import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

const URL = "localhost:8080/api/auth/signup";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (event) => {
    // prevent refresh
    event.preventDefault();

    const bodyRegistration = {
      name: name,
      username: username,
      email: email,
      password: password,
      roles: ["ROLE_USER"],
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRegistration),
      });

      if (response.ok) {
        setRegistered(true);
        alert(`Registrazione avvenuta con successo ${username}!`);
      } else {
        alert(`errore durante il la registrazione ${response.status}`);
      }
    } catch (error) {
      alert(`ERRORE GENERALE: ${error}`);
    }
  };

  {
    /* if (registered) {
    return <Navigate to="/" />;
  }
*/
  }

  return (
    <Row className="signInBg">
      <Col className="d-flex flex-column flex-lg-row align-items-center">
        <form
          className="formComponent formComponentSignIn d-flex flex-column align-items-center align-content-center justify-content-center "
          onSubmit={handleSubmit}>
          <div>
            <label className="d-block" htmlFor="firstname">
              Nome:
            </label>
            <input
              className="my-3 p-2"
              type="firstname"
              placeholder="inserisci nome"
              id="firstname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="d-block" htmlFor="username">
              Username
            </label>
            <input
              className="my-3 p-2"
              type="text"
              placeholder="inserisci username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="d-block" htmlFor="email">
              Email:
            </label>
            <input
              className="my-3 p-2"
              type="text"
              placeholder="inserisci email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="d-block" htmlFor="password">
              Password:
            </label>
            <input
              className="my-3 p-2"
              type="password"
              placeholder="inserisci password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="d-block" htmlFor="password">
              Ruolo:
            </label>
            <input
              className="my-3 p-2"
              type="text"
              placeholder="inserisci ruolo"
              id="ruolo"
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
            />
          </div>

          <Button type="submit" className="log_reg_Button">
            Registrati
          </Button>
          <p>
            Sei già registrato?
            <Link to={"/"}>
              <span className="logIn">Clicca qui</span>
            </Link>
          </p>
        </form>
      </Col>
    </Row>
  );
};

export default Register;
