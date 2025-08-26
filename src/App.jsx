import About from './pages/About'
import './App.css'
import{ Routes, Route} from 'react-router'
import Product from './pages/product'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Layout from './components/Layout'
import Shop from './pages/Shop'
function App() {


  return (
    <>
    <Layout>
     <Routes>
      <Route path='/product' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop/>}/>

     
     </Routes>
     </Layout>
    </>
  )
}

export default App
