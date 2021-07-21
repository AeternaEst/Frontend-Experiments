import React from "react";
import ReactDOM from "react-dom";
import CarRentalForm from "./forms/final-form/car-rental-form";
import PersonalInformationForm from "./forms/final-form/personal-information-form";

const injectTarget = document.querySelector(".root");

ReactDOM.render(<CarRentalForm />, injectTarget);
