import React from "react";
import { Field } from "react-final-form";
import { getValidationRules, ValidationRule } from "../validation-rules";

interface TextFieldProps {
  fieldId: string;
  validationRules: ValidationRule[];
  placeholderText?: string;
  label?: string;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  fieldId,
  validationRules,
  placeholderText,
  label,
  disabled,
}) => {
  console.log("Rendering text-field");
  return (
    <div className="text-field">
      {label && <label htmlFor={fieldId}>{label}</label>}
      <Field name={fieldId} validate={getValidationRules(validationRules)}>
        {({ input, meta }) => (
          <>
            <input
              disabled={disabled}
              type="text"
              placeholder={placeholderText}
              {...input}
            />{" "}
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </>
        )}
      </Field>
    </div>
  );
};

export default TextField;
