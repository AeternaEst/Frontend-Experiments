import { FormApi, FormState, FORM_ERROR } from "final-form";
import React from "react";
import { Form, FormSpy, useField, useForm } from "react-final-form";
import DropdownField from "./fields/dropdown-field";
import TextField from "./fields/text-field";
import { ValidationType } from "./validation-rules";

interface CarRentalFormValues {
  selectedCar: string;
  carComment: string;
  rentalPrice: string;
}

const initialValues: CarRentalFormValues = {
  selectedCar: "ford_fiesta",
  carComment: "",
  rentalPrice: "",
};

const CarRentalForm: React.FC = () => {
  const submit = (
    values: CarRentalFormValues,
    formApi: FormApi<CarRentalFormValues>
  ) => {
    console.log("submit clicked");
    if (values.selectedCar === "ford_fiesta") {
      return { [FORM_ERROR]: "Unacceptable selection" };
    }

    console.log("submit success", values, formApi);
    return undefined;
  };

  const onFormSpy = (formState: FormState<CarRentalFormValues>) => {
    if (formState.values.selectedCar === "tesla_cybertruck") {
      console.log("Elon musk sucks");
    }
  };

  return (
    <div className="car-rental-form">
      <Form<CarRentalFormValues>
        subscription={{ submitError: true }}
        initialValues={initialValues}
        onSubmit={submit}
        render={({ handleSubmit, submitError }) => (
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
            <FormSpy<CarRentalFormValues> subscription={{ values: true }}>
              {({ values }) => (
                <pre>
                  Current price for selection: {values.selectedCar} Price:{" "}
                  {values.selectedCar === "ford_fiesta" ? 700 : 1700}
                </pre>
              )}
            </FormSpy>
            <FormSpy subscription={{ values: true }}>
              {() => {
                const selectedCar = useField("selectedCar");
                const form = useForm<CarRentalFormValues>();
                console.log("use field selected car", selectedCar);
                const rentalPrice =
                  selectedCar.input.value === "ford_fiesta" ? "700" : "1700";
                form.change("rentalPrice", rentalPrice);
                return <></>;
              }}
            </FormSpy>
            <TextField
              fieldId="rentalPrice"
              validationRules={[]}
              label="Price"
              disabled
            />
            {submitError && <h3>{submitError}</h3>}
            <button type="submit">Submit</button>
            <FormSpy onChange={onFormSpy} />
          </form>
        )}
      />
    </div>
  );
};

export default CarRentalForm;
