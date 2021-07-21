import { FormApi, FORM_ERROR } from "final-form";
import React from "react";
import { Form } from "react-final-form";
import DropdownField from "./fields/dropdown-field";
import TextField from "./fields/text-field";
import { ValidationType } from "./validation-rules";

interface CarRentalFormValues {
  selectedCar: string;
  carComment: string;
}

const initialValues: CarRentalFormValues = {
  selectedCar: "ford_fiesta",
  carComment: "",
};

const CarRentalForm: React.FC = () => {
  const submit = (
    values: CarRentalFormValues,
    formApi: FormApi<CarRentalFormValues>
  ) => {
    if (values.selectedCar === "ford_fiesta") {
      return { [FORM_ERROR]: "Unacceptable selection" };
    }

    console.log("submit success", values, formApi);
    return undefined;
  };

  return (
    <div className="car-rental-form">
      <Form<CarRentalFormValues>
        initialValues={initialValues}
        onSubmit={submit}
        render={({ handleSubmit, values, submitError }) => (
          <form onSubmit={handleSubmit}>
            <DropdownField
              fieldId="selectedCar"
              options={[
                {
                  text: "Ford Fiesta",
                  value: "ford_fiesta",
                },
                {
                  text: "Testa Cybertruck",
                  value: "tesla_cybertruck",
                },
              ]}
              validationRules={[
                {
                  type: ValidationType.Required,
                  priority: 1,
                  errorMessage: "You must select a car",
                },
              ]}
              label="Select rental car"
            />
            <TextField
              fieldId="carComment"
              validationRules={[]}
              label="Write a comment for you car"
              placeholderText="Car comment"
            />
            Current price for selection: {values.selectedCar} Price:{" "}
            {values.selectedCar === "ford_fiesta" ? 700 : 1700}
            {submitError && <h3>{submitError}</h3>}
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};

export default CarRentalForm;
