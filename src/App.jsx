
import './App.css'
import About_Me from './components/about/About_Me'
import Container from './components/Container'
import ContactMe from './components/contectme/ContactMe'
import Header from './components/header/Header'
import Navbar from './components/navbar/navbar'
import My_Projects from './components/projects/My_Projects'
import SideIcon from './components/SideIcon/SideIcon'
import MySkills from './components/skills/MySkills'

function App() {


  return (
    <>
      <div className='z-50'>
        <SideIcon></SideIcon>
      </div>
      <Container>
        <Navbar></Navbar>
        <Header></Header>
      </Container>
      <div className='bg-[#215145]'>
        <div className={`bg-[url(./src/assets/graph.png)] bg-repeat-round w-screen py-28`}><Container><About_Me></About_Me></Container></div>
      </div>
      <div className={`py-28 z-0`}>
        <MySkills></MySkills>
      </div>
      <Container>
        <My_Projects></My_Projects>
      </Container>

      <ContactMe></ContactMe>
      
      



    </>
  )
}

export default App
