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
        GET_SINGLE_CANDIDATE: getSingleCandidateSlice
    }
})

export default appStore;