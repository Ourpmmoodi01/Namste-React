//Episode 1 - inception

// const heading = React.createElement("h1",{id:"heading"},"This is an exxample");
// console.log(heading) // return object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)


//first method
// const parent = React.createElement("div" ,{id: "parent"} ,
//     React.createElement("div" ,{id: "child"} ,
//         React.createElement("h1" , {} , "im an h1 tagg"),
//         React.createElement("h2" , {} , "hellow im an h2 tagg")
// ));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent)


//secound method
const parent = React.createElement("div" , {id:"parent"} , 
    React.createElement("div" , {id : "child"} , '',[
            React.createElement('h1' , {} , "Hey im an h1 Tagg"),
            React.createElement("h2" , {} , "Hellow im an h2 Tagg")
        ],
        React.createElement("div" , {id:"child2"} , "",
            [
                React.createElement("h1" , {} , "Hey im an child h1 tagg"),
                React.createElement("h2" , {} , "Heyy im an child h2 Tagg")
            ]
        )
    ))


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

