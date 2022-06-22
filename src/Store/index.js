import { configureStore } from "@reduxjs/toolkit";
import { sessionReducer } from "redux-react-session";
import calendarSlice from "./calendar";
import preparationSlice from "./MedicalRecord/preparation";
import consultationReasonsSLice from "./MedicalRecord/consultationReasons";
import backgroundDataSlice from "./MedicalRecord/backgroundData";
import currentProblemSlice from "./MedicalRecord/currentProblem";
import physicalExamSlice from "./MedicalRecord/physicalExamn";
import organSystemReviewSlice from "./MedicalRecord/organSystemReview";
import diagnosticSlice from "./MedicalRecord/diagnostic";
import treatmentSlice from "./MedicalRecord/treatment";
import appointmentSlice from "./appointment";

const store = configureStore({
  reducer: {
    sessionReducer,
    calendar: calendarSlice,
    appointment: appointmentSlice,
    preparation: preparationSlice,
    consultationReasons: consultationReasonsSLice,
    backgroundData: backgroundDataSlice,
    currentProblem: currentProblemSlice,
    physicalExam: physicalExamSlice,
    organSystemReview: organSystemReviewSlice,
    diagnostic: diagnosticSlice,
    treatment: treatmentSlice
  }
});

export default store;
