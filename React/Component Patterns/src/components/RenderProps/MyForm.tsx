import React from 'react';
import RandomForm from './RandomForm';

const MyForm = (props: any) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submit success');
  };

  return (
    <div className="my-form">
      <RandomForm
        onSubmit={onSubmit}
        render={
                    handleSubmit => (
                      <form onSubmit={handleSubmit}>
                        <button type="submit">Submit Form</button>
                      </form>
                    )
                }
      />
    </div>
  );
};

export default MyForm;