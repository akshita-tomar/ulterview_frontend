import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';

const Login = React.lazy(() => import('./components/auth/login'));
// const Register = React.lazy(() => import('./components/auth/register'));
const Header = React.lazy(() => import('./components/header/header'));
const Language = React.lazy(() => import('./components/language/language'));
const HomePage = React.lazy(() => import('./components/homepage/homepage'));
const CreateTask = React.lazy(() => import('./components/homepage/createTask'));
const Sidebar = React.lazy(() => import('./components/sidebar/sidebar'));
const UpdateQuestions = React.lazy(()=>import('./components/updateQuestions/updateQuestions'));
const Questionnarie = React.lazy(()=>import('./components/questionnarie/questionnarie'))



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>}></Route>
          {/* <Route path='/register' element={<Suspense fallback={<div>Loading...</div>}><Register /></Suspense>}></Route> */}
          <Route path='/header' element={<Suspense fallback={<div>Loading...</div>}><Header /></Suspense>}></Route>
          <Route path='/language' element={<Suspense fallback={<div>Loading...</div>}><Header /><Language /></Suspense>}></Route>
          <Route path='/homepage' element={<Suspense fallback={<div>Loading...</div>}><Header /> <Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense></Suspense>}></Route>
          <Route path='/create-task' element={<Suspense fallback={<div>Loading...</div>}><Header/><Sidebar/><CreateTask /></Suspense>}></Route>
          <Route path='/sidebar' element={<Suspense fallback={<div>Loading...</div>}><Sidebar /></Suspense>}></Route>
          <Route path='/updateQuestions' element={<Suspense fallback={<div>Loading...</div>}><Header/><Sidebar/><UpdateQuestions/></Suspense>}></Route>
          <Route path='/questionnarie' element={<Suspense fallback={<div>Loading...</div>}><Header/><Sidebar/><Questionnarie/></Suspense>}></Route>
        </Routes > 
      </BrowserRouter>
    </div>  
  );
}

export default App;
