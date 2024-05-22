import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Login = React.lazy(() => import('./components/auth/login'));
// const Register = React.lazy(() => import('./components/auth/register'));
const Header = React.lazy(() => import('./components/header/header'));
const Language = React.lazy(() => import('./components/language/language'));
const HomePage = React.lazy(() => import('./components/homepage/homepage'));
const CreateTask = React.lazy(() => import('./components/homepage/createTask'));
const Sidebar = React.lazy(() => import('./components/sidebar/sidebar'));
const UpdateQuestions = React.lazy(()=>import('./components/updateQuestions/updateQuestions'));
const CandidateEntries = React.lazy(()=>import('./components/candidates/candidateEntries'))
const ModalView = React.lazy(()=>import('./components/homepage/modal'))
const RegisterCandidateModal = React.lazy(()=>import('./components/candidates/candidateRegistarModal'))
const UpdateCandidate = React.lazy(()=>import('./components/candidates/updateCandidate'))
const InviteCandidate = React.lazy(()=>import('./components/candidates/InviteCandidate'))
const InterviewQuestions =  React.lazy(()=>import('./components/candidates/interviewQuestions'))

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
          <Route path='/candidates' element={<Suspense fallback={<div>Loading...</div>}> <Header/><Sidebar/><CandidateEntries/></Suspense>}></Route>
          <Route path='/modalview' element={<Suspense fallback={<div>Loading...</div>}> <ModalView/></Suspense>}></Route>
          <Route path='/register-candidate-modal' element={<Suspense fallback={<div>Loading...</div>}> <RegisterCandidateModal/></Suspense>}></Route>
          <Route path='/update-candidate' element={<Suspense fallback={<div>Loading...</div>}> <UpdateCandidate/></Suspense>}></Route>
          <Route path='/invite-candidate' element={<Suspense fallback={<div>Loading...</div>}> <InviteCandidate/></Suspense>}></Route>
          <Route path='/interview-questions/:id' element={<Suspense fallback={<div>Loading...</div>}> <InterviewQuestions/></Suspense>}></Route>
        </Routes > 
      </BrowserRouter>
    </div>  
  );
}

export default App;
