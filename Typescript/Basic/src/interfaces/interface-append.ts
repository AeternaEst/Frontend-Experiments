
const interfaceAppend = (): void => {
  const body = document.body;

  body.addEventListener("mouseover", (e: MouseEvent) => {
    console.log(e.x);
    console.log(e.myCustomProperty); /* See MouseEventExtension.ts */
  });
}

export default interfaceAppend;