import classnames from 'classnames'


function useTypeDeclarations(): void {
  const addCustomClass = true;
  const numbers = [1, 2, 3, 4];

  const classes = classnames("hello-world", {
    "custom": addCustomClass,
    "number": numbers.length > 5
  });

  console.log(classes);
}

export default useTypeDeclarations;