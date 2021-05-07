import { FormApi } from "final-form";
import React from "react";
import { Form, Field } from "react-final-form";
import {
  composeValidators,
  getValidationRules,
  isRequired,
  maxLength,
  minLength,
  ValidationType,
} from "./validation-rules";

interface PersonalInformationFormValues {
  contactInformation: {
    firstName: string;
    lastName: string;
    gender: "male" | "female";
  };
  preferences: {
    food: ReadonlyArray<string>;
    vegan: boolean;
    favoriteRapper: string;
  };
}

const initialValues: PersonalInformationFormValues = {
  contactInformation: {
    firstName: "",
    lastName: "",
    gender: "male",
  },
  preferences: {
    food: [],
    vegan: false,
    favoriteRapper: "tupac",
  },
};

const PersonalInformationForm: React.FC = () => {
  const onSubmit = (
    values: PersonalInformationFormValues,
    form: FormApi<PersonalInformationFormValues>
  ) => {
    console.log("onSubmit", values, form);
    console.log(
      "SUBMITTING contact info",
      values.contactInformation.firstName,
      values.contactInformation.lastName,
      values.contactInformation.gender
    );
    console.log(
      "SUBMITTING preferences",
      values.preferences.food,
      values.preferences.vegan,
      values.preferences.favoriteRapper
    );
  };

  return (
    <Form<PersonalInformationFormValues>
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        hasValidationErrors,
      }) => (
        <>
          <h3>Please fill out your personal information</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <h4>Contact Information</h4>
              <div>
                <label>
                  First Name:{" "}
                  <Field
                    name="contactInformation.firstName"
                    validate={composeValidators(
                      isRequired("Is required"),
                      minLength("The minimum length required is 3", 3),
                      maxLength("The maximum length required is 10", 10)
                    )}
                  >
                    {({ input, meta }) => (
                      <>
                        <input
                          placeholder="first name"
                          type="text"
                          {...input}
                        />{" "}
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </>
                    )}
                  </Field>
                </label>
              </div>
              <div>
                <label>
                  Last Name:{" "}
                  <Field
                    name="contactInformation.lastName"
                    validate={getValidationRules([
                      {
                        type: ValidationType.MaxLength,
                        priority: 3,
                        errorMessage: "The maximum length required is 10",
                      },
                      {
                        type: ValidationType.MinLength,
                        priority: 2,
                        errorMessage: "The minimum length required is 3",
                      },
                      {
                        type: ValidationType.Required,
                        priority: 1,
                        errorMessage: "Is required",
                      },
                    ])}
                    render={({ input, meta }) => (
                      <>
                        <input placeholder="last name" type="text" {...input} />{" "}
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </>
                    )}
                  />
                </label>
              </div>
              <br />
              <div>
                <label>
                  Gender:{" "}
                  <Field component="select" name="contactInformation.gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>
                </label>
              </div>
            </div>
            <div>
              <h4>Preferences</h4>
              <div>
                <label htmlFor="food">Favorite Food: </label>
                <br />
                <Field
                  id="food"
                  name="preferences.food"
                  component="select"
                  multiple
                >
                  <option value="pizza">Pizza</option>
                  <option value="pasta">Pasta</option>
                  <option value="steak">Steak</option>
                </Field>
              </div>
              <div>
                <label htmlFor="vegan"> Is Vegan ? </label>
                <Field id="vegan" name="preferences.vegan" type="checkbox">
                  {(props) => (
                    <input
                      type="checkbox"
                      value="vegan"
                      onChange={(e) => {
                        props.input.onChange(e);
                        console.log("vegan onChange", e.target.value);
                      }}
                      {...props}
                    />
                  )}
                </Field>
              </div>
              <div>
                <span>Who is your favorite rapper ? </span>
                <div>
                  <label htmlFor="tupac">Tupac</label>
                  <Field
                    id="tupac"
                    name="preferences.favoriteRapper"
                    component="input"
                    type="radio"
                    value="tupac"
                  />
                </div>
                <div>
                  <label htmlFor="biggie">Biggie</label>
                  <Field
                    id="biggie"
                    name="preferences.favoriteRapper"
                    component="input"
                    type="radio"
                    value="biggie"
                  />
                </div>
                <div>
                  <label htmlFor="eminem">Eminem</label>
                  <Field
                    id="eminem"
                    name="preferences.favoriteRapper"
                    component="input"
                    type="radio"
                    value="eminem"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting || pristine || hasValidationErrors}
            >
              Submit
            </button>
            <button
              onClick={() => form.reset()}
              type="button"
              disabled={pristine}
            >
              Reset
            </button>
          </form>
        </>
      )}
    />
  );
};

export default PersonalInformationForm;
