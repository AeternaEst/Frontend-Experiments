/**
 * Removes undefined and null from a type
 */

type Phone = {
  model: string;
  isSmartPhone: boolean;
}

const runNonNullable = (): void => {
  const phone: Phone = {
    model: "IPhone X",
    isSmartPhone: true
  };
  const nonNullablePhone: NonNullable<Phone> = {
    model: "Samsung Galaxy 7",
    isSmartPhone: true
  };

  //phone = undefined;
  /* This should not be possible */
  //nonNullablePhone = null;

  console.log(phone);
  console.log(nonNullablePhone);
}

export default runNonNullable;