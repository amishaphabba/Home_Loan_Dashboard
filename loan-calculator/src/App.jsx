import './App.css'
import NavBar from './components/NavBar'
import BreadCrumbs from './components/BreadCrumbs'
import Calculator from './components/Calculator'
import Section from './components/Section'
import Footer from './components/Footer'

function App() {

  return (
    <div className='main-page'>
    <NavBar></NavBar>
    <BreadCrumbs></BreadCrumbs>
    <Calculator></Calculator>
    <Section></Section>
    <Footer></Footer>
    </div>
  )
}

export default App
