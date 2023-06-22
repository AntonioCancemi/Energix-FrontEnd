import { Container, Row, Col } from 'react-bootstrap';import { useSelector } from 'react-redux';

const HomePage=()=>{
    const auth=useSelector(state=>state.user.auth)
    const getFatture=()=>{
    const url = "http://localhost:8080/api/clienti/all/0";  
    fetch(url,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
      },
      
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    }
    getFatture();
    return(
    <div className="mainParent" >
        <div>
           <section className="hero">
        <div className="hero-content">
          <h1>ENERGIX</h1>
          <p>Gestisci qui Clienti e Fatture in modo efficiente</p>
        </div>
      </section>
      
      <section className="main-content">
        <Container>
          <Row>
            <Col>
              <h2>Colonna 1</h2>
              <p>Contenuto della colonna 1</p>
            </Col>
            <Col>
              <h2>Colonna 2</h2>
              <p>Contenuto della colonna 2</p>
            </Col>
            <Col>
              <h2>Colonna 3</h2>
              <p>Contenuto della colonna 3</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    </div>)
}
export default HomePage