export function logProps(obj: any): void {
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] !== 'function') {
      console.log(`Key: ${key}, Value: ${obj[key]}`)
    }
  });
}

function getIndentString(indent = 0): string {
  let indentString = "";
  for(let i = 0; i < indent; i++) {
    indentString += " ";
  }
  return indentString;
}

export function logPropsDeep(obj: any, indent = 0): void {
  const indention = getIndentString(indent) ;
  for(const key in obj) {
    const value = obj[key];
    if(typeof value !== 'function') {
      if(typeof value === 'object') {
        console.log(`${indention}Key: ${key}`);
        logPropsDeep(value, indent + 4);
      } else {
        console.log(`${indention}Key: ${key}, Value: ${value}`);
      }
    }
  }
}

