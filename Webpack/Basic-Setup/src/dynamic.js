import { render } from "react-dom";

const init = () => {
    const root = document.getElementById("no-ref")

    const moduleCache = {};

    const context = require.context('./dynamic-imports/no-refs/', false, /.jsx$/);

    context.keys().forEach(modulePath => {
        moduleCache[modulePath] = context(modulePath);
        const element = moduleCache[modulePath].default();
        console.log("element", element);
        render(element, root);
    });

    console.log(moduleCache);

}

init();