import React, { FunctionComponent } from "react";

interface RandomFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  render: (event: any) => React.ReactElement;
}

const RandomForm: FunctionComponent<RandomFormProps> = ({
  onSubmit,
  render
}) => {
  const randomSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const result = Math.random() * 100;
    console.log(`The result was ${result}`);
    if (result < 50) {
      alert("Sorry no dice");
    } else {
      onSubmit(event);
    }
  };

  return render(randomSubmit);
};

export default RandomForm;
