
import { useContext } from 'react'
import './App.css'
import About_Me from './components/about/About_Me'
import Container from './components/Container'
import ContactMe from './components/contectme/ContactMe'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import My_Projects from './components/projects/My_Projects'
import SideIcon from './components/SideIcon/SideIcon'
import MySkills from './components/skills/MySkills'
import { AuthContext } from './provider/AuthProvider'

function App() {
  const { homeRef, aboutRef, projectRef, contactRef } = useContext(AuthContext)

  return (
    <>
      <div className='z-50 hidden md:block'>
        <SideIcon></SideIcon>
      </div>

      {/* Header/home section */}
      <div ref={homeRef}>
        <Container>
          <Navbar></Navbar>
          <Header></Header>
        </Container>
      </div>

      {/* about me section */}
      <div ref={aboutRef}>
        <div className='bg-[#215145]'>
          <div className={`bg-[url('./src/assets/graph.png')] bg-repeat-round w-screen py-10 lg:py-28`}><Container><About_Me></About_Me></Container>
          </div>
        </div>
        <div className={`py-10 lg:py-28 z-0`}>
          <MySkills></MySkills>
        </div>
      </div>

      {/* My Projects Section */}
      <div ref={projectRef}>
        <Container>
          <My_Projects></My_Projects>
        </Container>
      </div>


      {/* Contact with Me section */}
      <div ref={contactRef}>
        <div className='bg-[#215145]'>
          <div className={`bg-[url('./src/assets/graph.png')] bg-repeat-round w-screen py-10 lg:py-28`}>
            <Container>
              <ContactMe></ContactMe>
            </Container>
          </div>
        </div>
      </div>

<div className='py-6'>
  <Container>
      <Footer></Footer>
</Container>
</div>






    </>

  )
}

export default App
