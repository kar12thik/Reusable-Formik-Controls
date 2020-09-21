import React from "react";
import "./styles.css";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import EnrollmentForm from "./components/EnrollmentForm";

export default function App() {
  return (
    <div className="App">
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      <EnrollmentForm />
    </div>
  );
}
