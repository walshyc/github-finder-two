import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import { GithubProvider } from './context/github/GithubContext';

function App() {
  return (
    <GithubProvider>
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
    </GithubProvider>
  );
}

export default App;
