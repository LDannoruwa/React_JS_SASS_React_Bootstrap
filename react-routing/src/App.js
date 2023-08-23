import logo from './logo.svg';
import './App.scss'; //import SASS file
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Layout from './layouts/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              {/*nested routes*/}
              <Route path='/' element={<Home/>} /> {/*default router path*/}
              <Route path='/user' element={<User/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
