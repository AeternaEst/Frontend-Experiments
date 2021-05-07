export const isRequired = (errorMessage: string) => (value: string) =>
  !value ? errorMessage : undefined;
export const minLength = (errorMessage: string, min: number) => (
  value: string
) => (value.length < min ? errorMessage : undefined);
export const maxLength = (errorMessage: string, max: number) => (
  value: string
) => (value.length > max ? errorMessage : undefined);

export const composeValidators = (
  ...validators: ReadonlyArray<(value: string) => string | undefined>
) => (value: string) =>
  validators.reduce<string | undefined>(
    (prev, current) => prev || current(value),
    undefined
  );

export enum ValidationType {
  Required,
  MinLength,
  MaxLength,
}

export interface ValidationRule {
  type: ValidationType;
  priority: number;
  errorMessage: string;
}

export const getValidationRules = (validationRules: ValidationRule[]) => {
  const sortedRules = [...validationRules].sort(
    (a, b) => a.priority - b.priority
  );
  const validatorFunctions = sortedRules.reduce<
    ReadonlyArray<(value: string) => string | undefined>
  >((prev, current) => {
    switch (current.type) {
      case ValidationType.Required:
        return [...prev, isRequired(current.errorMessage)];
      case ValidationType.MinLength:
        return [...prev, minLength(current.errorMessage, 3)];
      case ValidationType.MaxLength:
        return [...prev, maxLength(current.errorMessage, 10)];
      default:
        return prev;
    }
  }, []);

  return composeValidators(...validatorFunctions);
};
