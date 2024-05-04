import React from "react"
import ReactDOM from "react-dom/client"
const react=React.createElement("h1",{},"hello")

const Title =()=>(
    <h1>title</h1>
)

const Heading = () =>(
    <div>
        <Title/>
        <Title></Title>
        {Title()}
       {react}
    <h1 id="heading">hello world</h1>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading/>)