
import './App.css'
import Container from './components/Container'
import Header from './components/header/Header'
import Navbar from './components/navbar/navbar'
import SideIcon from './components/SideIcon/SideIcon'

function App() {


  return (
    <>
      <Container>
        <Navbar></Navbar>
        <Header></Header>
        <SideIcon></SideIcon>
      </Container>
    </>
  )
}

export default App
