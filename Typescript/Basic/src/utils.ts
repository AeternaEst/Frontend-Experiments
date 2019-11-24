export function logProps(obj: any): void {
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] !== 'function') {
      console.log(`Key: ${key}, Value: ${obj[key]}`)
    }
  });
}