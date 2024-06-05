import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Loader from './utils/loader';


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
const CandidatesPerformance =  React.lazy(()=>import('./components/AssesmentPortal/candidatesPerformance'))
const CandidateAnswerSheet =  React.lazy(()=>import('./components/AssesmentPortal/CandidateAnsSheet'))
const CheckedSheet =  React.lazy(()=>import('./components/AssesmentPortal/CandidateCheckedSheet'))
const Team =  React.lazy(()=>import('./components/TeamHub/team'))
const RegistrationModal = React.lazy(()=>import('./components/TeamHub/registrationModal'))
const ChangePassword = React.lazy(()=>import('./components/header/changePassword'))
const UpdateUser = React.lazy(()=>import('./components/TeamHub/updateModal'))
const HrRound = React.lazy(()=>import('./components/hrScreening/HrRound'))
const HrRoundSeries = React.lazy(()=>import('./components/hrScreening/addSeriesModal'))
const UpdateHrRoundSeries = React.lazy(()=>import('./components/hrScreening/updateSeriesModal'))
const HrRoundQuestions = React.lazy(()=>import('./components/hrScreening/HrRoundQuestions'))
const AddHrRoundQuestion = React.lazy(()=>import('./components/hrScreening/addQuestionModal'))
const UpdateHrRoundQuestions = React.lazy(()=>import('./components/hrScreening/updateQuestion'))
const TestData = React.lazy(()=>import('./components/hrScreening/testData'))


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Suspense fallback={<Loader/>}><Login /></Suspense>}></Route>
          {/* <Route path='/register' element={<Suspense fallback={<Loader/>}><Register /></Suspense>}></Route> */}
          <Route path='/header' element={<Suspense fallback={<Loader/>}><Header /></Suspense>}></Route>
          <Route path='/language' element={<Suspense fallback={<Loader/>}><Header /><Language /></Suspense>}></Route>
          <Route path='/homepage' element={<Suspense fallback={<Loader/>}><Header /> <Suspense fallback={<Loader/>}><HomePage /></Suspense></Suspense>}></Route>
          <Route path='/create-task' element={<Suspense fallback={<Loader/>}><Header/><Sidebar/><CreateTask /></Suspense>}></Route>
          <Route path='/sidebar' element={<Suspense fallback={<Loader/>}><Sidebar /></Suspense>}></Route>
          <Route path='/updateQuestions' element={<Suspense fallback={<Loader/>}><Header/><Sidebar/><UpdateQuestions/></Suspense>}></Route>
          <Route path='/candidates' element={<Suspense fallback={<Loader/>}> <Header/><Sidebar/><CandidateEntries/></Suspense>}></Route>
          <Route path='/modalview' element={<Suspense fallback={<Loader/>}> <ModalView/></Suspense>}></Route>
          <Route path='/register-candidate-modal' element={<Suspense fallback={<Loader/>}> <RegisterCandidateModal/></Suspense>}></Route>
          <Route path='/update-candidate' element={<Suspense fallback={<Loader/>}> <UpdateCandidate/></Suspense>}></Route>
          <Route path='/invite-candidate' element={<Suspense fallback={<Loader/>}> <InviteCandidate/></Suspense>}></Route>
          <Route path='/interview-questions/:id' element={<Suspense fallback={<Loader/>}> <InterviewQuestions/></Suspense>}></Route>
          <Route path='/candidates-performance' element={<Suspense fallback={<Loader/>}> <Header/><Sidebar/><CandidatesPerformance/></Suspense>}></Route>
          <Route path='/candidate-answers-sheet/:id' element={<Suspense fallback={<Loader/>}> <Header/><Sidebar/><CandidateAnswerSheet/></Suspense>}></Route>
          <Route path='/candidate-checked-sheet/:id' element={<Suspense fallback={<Loader/>}> <Header/><Sidebar/><CheckedSheet/></Suspense>}></Route>
          <Route path='/ultivic-team' element={<Suspense fallback={<Loader/>}> <Header/><Sidebar/><Team/></Suspense>}></Route>
          <Route path='/registration' element={<Suspense fallback={<Loader/>}><RegistrationModal/></Suspense>}></Route>
          <Route path='/change-password' element={<Suspense fallback={<Loader/>}><ChangePassword/></Suspense>}></Route>
          <Route path='/update-user' element={<Suspense fallback={<Loader/>}><UpdateUser/></Suspense>}></Route>
          <Route path='/hr-screening' element={<Suspense fallback={<Loader/>}><Header/><Sidebar/><HrRound/></Suspense>}></Route>
          <Route path='/hr-round-series' element={<Suspense fallback={<Loader/>}><HrRoundSeries/></Suspense>}></Route>
          <Route path='/hr-round-update-series' element={<Suspense fallback={<Loader/>}><UpdateHrRoundSeries/></Suspense>}></Route>
          <Route path='/hr-round-questions/:id' element={<Suspense fallback={<Loader/>}><Header/><Sidebar/><HrRoundQuestions/></Suspense>}></Route>
          <Route path='/hr-round-add-question' element={<Suspense fallback={<Loader/>}><AddHrRoundQuestion/></Suspense>}></Route>
          <Route path='/hr-round-update-question' element={<Suspense fallback={<Loader/>}><UpdateHrRoundQuestions/></Suspense>}></Route>
          <Route path='/test-data' element={<Suspense fallback={<Loader/>}><Header/><Sidebar/> <TestData/></Suspense>}></Route>
        </Routes> 
      </BrowserRouter>
    </div>  
  );
}

export default App;
