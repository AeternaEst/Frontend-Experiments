import { render } from "react-dom";

const init = () => {

    const dynamicContext = require.context('../no-refs-imports/', false, /.js$/);
    console.log("dynamicContext", dynamicContext);

    dynamicContext.keys().forEach(modulePath => {
        console.log("modulePath", modulePath)
        const module = dynamicContext(modulePath);
        console.log(module);
        const definition = module.default;
        console.log("definition", definition);
        definition.component().then(module => {
            console.log("module found", module)
            renderComponent(definition.name, module.default());
        });
    });

}

const renderComponent = (id, component) => {
    console.log("ElementId", id);
    console.log("Component", component);
    const target = document.getElementById(id)
    console.log("Target Element", target);
    render(component, target);
}

init();
