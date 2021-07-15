import { useState } from 'react'
import './App.css'
import MyTable from './components/MyTable'
import { Col, Container, Row } from 'react-bootstrap'
import MyAlert from './components/MyAlert'

function App() {
  // THE STATE MUST BE STORED HERE
  // because App is the most close common parent

  const [selected, setSelected] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <MyTable selected={selected} changeSelected={(newCharacter) => setSelected(newCharacter)} />
            </Col>
            <Col className="my-auto">
              <MyAlert selected={selected} />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
