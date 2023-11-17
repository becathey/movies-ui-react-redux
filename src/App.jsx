import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound'
import './App.css'

function App() {

  return (
    <div className='App'>
      <main>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
