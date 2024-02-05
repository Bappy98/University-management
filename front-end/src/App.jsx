
import Home from './pages/home/Home'
import Faculties from './pages/faculties/Faculties'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     <div >
     <Routes>
        <Route path='/' element={<Home/>}/>
     
        <Route path='/facalty' element={<Faculties/>}/>

       
      </Routes>
     </div>
      
      
      </BrowserRouter>
   
    </div>
  )
}

export default App