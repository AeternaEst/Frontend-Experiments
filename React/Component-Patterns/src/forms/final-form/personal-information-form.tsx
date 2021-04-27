import { FormApi } from "final-form";
import React from "react";
import { Form, Field } from "react-final-form";

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
      // validate={validate}
      render={({ handleSubmit }) => (
        <>
          <h3>Please fill out your personal information</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <h5>Contact Information</h5>
              <Field name="contactInformation.firstName">
                {(props) => (
                  <input
                    placeholder="first name"
                    type="text"
                    {...props.input}
                  />
                )}
              </Field>
              <br />
              <Field
                name="contactInformation.lastName"
                render={(props) => (
                  <input placeholder="last name" type="text" {...props.input} />
                )}
              />
              <br />
              <Field
                defaultValue="male"
                component="select"
                name="contactInformation.gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
            </div>
            <div>
              <h5>Preferences</h5>
              <Field name="preferences.food" component="select" multiple>
                <option value="pizza">Pizza</option>
                <option value="pasta">Pasta</option>
                <option value="steak">Steak</option>
              </Field>
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
              <p>Who is your favorite rapper ?</p>
              <label htmlFor="tupac">Tupac</label>
              <Field
                id="tupac"
                name="preferences.favoriteRapper"
                component="input"
                type="radio"
                value="tupac"
              />
              <label htmlFor="biggie">Biggie</label>
              <Field
                id="biggie"
                name="preferences.favoriteRapper"
                component="input"
                type="radio"
                value="biggie"
              />
              <label htmlFor="eminem">Eminem</label>
              <Field
                id="eminem"
                name="preferences.favoriteRapper"
                component="input"
                type="radio"
                value="eminem"
              />
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    />
  );
};

export default PersonalInformationForm;
