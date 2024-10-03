import Header from './components/Header/Header';
import './App.css'
import Hero from './components/Hero/Hero';
import Program from './components/Program/Program';

function App() {

  return (
    <>
    <Header/>
    <Hero />
    <div className='container'>
    <Program />
    </div>
   
    </>
  )
}

export default App
