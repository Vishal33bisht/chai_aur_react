function customRender(reactElemement,maincontainer){
    // const domElement=document.createElement(reactElement.type)
    //   domElement.innerHTML=reactElement.children
    //   domElement.setAttribute('href',reactElement.props.href)
    //   domElement.setAttribute('target',reactElement.props.target)
    //   maincontainer.appendChild(domElement)
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop === "children") continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
     maincontainer.appendChild(domElement)
}
const maincontainer=document.querySelector('#root')
const reactElement={
    type:'a',
    props:{
        href: 'https://www.google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
customRender(reactElement,maincontainer)