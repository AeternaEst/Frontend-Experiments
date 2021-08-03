import React from "react";
import { Field } from "react-final-form";
import { getValidationRules, ValidationRule } from "../validation-rules";

interface DropdownFieldProps {
  fieldId: string;
  validationRules: ValidationRule[];
  options: {
    value: string;
    text: string;
  }[];
  label?: string;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  fieldId,
  validationRules,
  options,
  label,
}) => {
  console.log("Rendering dropdown-field");
  return (
    <div className="dropdown-field">
      {label && <label htmlFor={fieldId}>{label}</label>}
      <Field
        name={fieldId}
        validate={getValidationRules(validationRules)}
        component="select"
      >
        {options.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default DropdownField;
