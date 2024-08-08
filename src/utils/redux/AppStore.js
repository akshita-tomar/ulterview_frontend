import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./authSlice/signInSlice";
import registerSlice from "./authSlice/registerSlice";
import getHrAndDeveloperDetails from "./getHrAndDeveloperDetailSlice/hrAndDeveloperDetailsSlice";
import deleteUser from "./getHrAndDeveloperDetailSlice/deleteUserSlice";
import editUsersDetails from "./getHrAndDeveloperDetailSlice/editUserDetailsSlice";
import getCandidates from "./candidateSlice/getCandidateSlice";
import deleteCandidate from "./candidateSlice/deleteCandidate";
import updateCandidateSlice from "./candidateSlice/updateCandidateSlice";
import getSingleCandidateSlice from "./candidateSlice/getSingleCandidateSlice";
import registerCandidate from "./candidateSlice/register_candidate_slice";
import sendHrRoundLink from "./candidateSlice/send_hr_round_slice";
import hrAddQuestions from "./hr_screening_slice/add_question_slice";
import hrAddSeries from "./hr_screening_slice/add_series";
import getHrSeriesRound from "./hr_screening_slice/get_hr_round_series_slice";
import deleteHrRoundSeries from "./hr_screening_slice/delete_hr_round_series_slice";
import hrRoundQuestions from "./hr_screening_slice/hr_round_questions_slice";
import deleteHrRoundQuestions from "./hr_screening_slice/delete_hr_round_questions_slice";

const appStore = configureStore({
    reducer: {
        SIGN_IN: signInSlice,
        REGISTER: registerSlice,
        GET_HR_DEVELOPER_DETAILS: getHrAndDeveloperDetails,
        DELETE_USER: deleteUser,
        EDIT_USER_DETAILS: editUsersDetails,
        GET_CANDIDATES: getCandidates,
        DELETE_CANDIDATE: deleteCandidate,
        UPDATE_CANDIDATE: updateCandidateSlice,
        GET_SINGLE_CANDIDATE: getSingleCandidateSlice,
        REGISTER_CANDIDATE: registerCandidate,
        HR_ROUND_LINK: sendHrRoundLink,
        HR_ADD_QUESTIONS: hrAddQuestions,
        HR_ADD_SERIES: hrAddSeries,
        GET_HR_ROUND_SERIES: getHrSeriesRound,
        DELETE_HR_ROUND_SERIES: deleteHrRoundSeries,
        HR_ROUND_QUESTIONS: hrRoundQuestions,
        DELETE_HR_ROUND_QUESTIONS: deleteHrRoundQuestions
    }
})

export default appStore;