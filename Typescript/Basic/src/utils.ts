export function logProps(obj: {}): void {
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] !== 'function') {
      console.log(`Key: ${key}, Value: ${obj[key]}`)
    }
  });
}