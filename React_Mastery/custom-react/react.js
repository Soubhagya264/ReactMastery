
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props
        [prop])
    }
    I
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://react.dev',
        traget: '_blank',
    },
    children: 'Click me to visit'
}
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer)

