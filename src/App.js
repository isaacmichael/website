
import {Routes, Route, NavLink as Link, Redirect, BrowserRouter, Switch, NavLink} from "react-router-dom"
import React from "react";
import Resume from "./Resume";
import Home from "./Home"
import Modeling from "./Modeling"

function App() {
    return (
        <div className="App">
            <div>
                <nav>
                    <ul>

                        <li>
                            <NavLink exact to={"/my-app"} activeClassName="active" end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={"Resume"} activeClassName="active" end>
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={"Modeling"} activeClassName="active" end>
                                3D Modeling
                            </NavLink>

                        </li>
                    </ul>
                </nav>


        </div>


        <div className={"main"}>

            <Routes>
                <Route exact path="/my-app" element={<Home />}></Route>
                <Route exact path="/Resume" element={<Resume />}></Route>
                <Route exact path="/Modeling" element={<Modeling />}></Route>
            </Routes>
        </div>

        </div>


);
}

export default App;

