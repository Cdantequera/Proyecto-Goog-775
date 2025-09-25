
import './App.css'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LeftAside from './components/LeftAside/LeftAside'
import RightAside from './components/RightAside/RightAside'
import GlobosFlotadores from './components/GlobosFlotadores/GlobosFlotadores'


function App() {
  
  return (
    <>
      <GlobosFlotadores />
      <div className="layout-container">
        <Header />
        <LeftAside />
        <MainContent />
        <RightAside />
        <Footer />
      </div>
      
      
      
    </>
  )
}

export default App
