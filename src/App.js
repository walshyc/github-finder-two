import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/layout/Footer';
import Navbar from './component/layout/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './component/layout/Alert';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex h-screen flex-col justify-between">
            <Navbar></Navbar>
            <main className="container mx-auto px-3 pb-12">
              <Alert></Alert>
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/user/:login" element={<User></User>}></Route>
                <Route path="notfound" element={<NotFound></NotFound>}></Route>
                <Route path="/*" element={<NotFound></NotFound>}></Route>
              </Routes>
            </main>
            <Footer></Footer>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
