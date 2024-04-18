import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, useState } from 'react';
import React from 'react';

const Login = React.lazy(() => import('./components/auth/login'));
const Register = React.lazy(() => import('./components/auth/register'));
const Header = React.lazy(() => import('./components/header/header'));
const Language = React.lazy(() => import('./components/language/language'));
const HomePage = React.lazy(() => import('./components/homepage/homepage'));
const HomepageData = React.lazy(() => import('./components/homepage/homepageData'));
const Sidebar = React.lazy(() => import('./components/sidebar/sidebar'));


function App() {
  const [configurechange, setConfigurechange] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>}></Route>
          {/* <Route path='/register' element={<Suspense fallback={<div>Loading...</div>}><Register /></Suspense>}></Route> */}
          <Route path='/header' element={<Suspense fallback={<div>Loading...</div>}><Header /></Suspense>}></Route>
          <Route path='/language' element={<Suspense fallback={<div>Loading...</div>}><Header /><Language /></Suspense>}></Route>
          <Route path='/homepage' element={<Suspense fallback={<div>Loading...</div>}><Header /><Suspense fallback={<div>Loading...</div>}><Sidebar setConfigurechange={setConfigurechange} /><HomePage setConfigurechange={setConfigurechange} configurechange={configurechange} /></Suspense></Suspense>}></Route>
          <Route path='/homepagedata' element={<Suspense fallback={<div>Loading...</div>}><HomepageData /></Suspense>}></Route>
          <Route path='/sidebar' element={<Suspense fallback={<div>Loading...</div>}><Sidebar /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
