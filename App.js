const heading = React.createElement("h1",{
    id:'heading'
},"Hello world from React !");
const parent = React.createElement("div",{
    id:'parent'
},[React.createElement("div",{
    id:'child1'
},[React.createElement("h1",{
},"Hello world from React !"),React.createElement("h2",{
},"check 1")]),React.createElement("div",{
    id:'child2'
},[React.createElement("h1",{
},"Hello world from React !"),React.createElement("h2",{
},"check 2")])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
console.log(root);