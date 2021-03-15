import React from "react"
import Nav from "./component/Nav"
import Switch from "./component/SwitchContain"
import "./App.scss"

function App() {
  return (
    <div  className={"container"}>
        <main>
            <Switch/>
        </main>
        <Nav/>
    </div>
  );
}
export default App;
