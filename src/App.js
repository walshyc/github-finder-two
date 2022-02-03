import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Layout/Navbar';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <div className="flex h-screen flex-col justify-between">
        <Navbar></Navbar>
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="notfound" element={<NotFound></NotFound>}></Route>
            <Route path="/*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
