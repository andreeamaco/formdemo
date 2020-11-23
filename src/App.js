import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from './Form';


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="vh-100 justify-content-center align-items-center">
          <Col>
             <Image src="https://bigheads.io/svg?accessory=none&body=chest&circleColor=blue&clothing=vneck&clothingColor=green&eyebrows=raised&eyes=heart&faceMask=false&faceMaskColor=white&facialHair=none3&graphic=react&hair=bun&hairColor=brown&hat=none&hatColor=black&lashes=false&lipColor=purple&mask=true&mouth=lips&skinTone=light" alt="Big Head"/>
          </Col>
          <Col>
            <Form />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
