import { render } from "react-dom";

const init = () => {

    const root = document.getElementById("no-ref")

    const moduleCache = {};

    const context = require.context('../dynamic-imports/no-refs/', false, /.jsx$/);
    console.log("context", context);

    context.keys().forEach(modulePath => {
        console.log("modulePath", modulePath)
        const module = context(modulePath);
        console.log(module);
        moduleCache[modulePath] = module;
        const element = module.default();
        console.log("element", element);
        render(element, root);
    });

}

init();
