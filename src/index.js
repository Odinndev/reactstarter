import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {Helmet} from "react-helmet";
import { Parallax } from 'react-parallax';
import './css/foo.css'
import Home from "./Home.js";
import Login from "./Login.js";
import SignUp from "./SignUp.js";

class App extends Component {
  render() {
    return (
      <div className="App">

      <Helmet>
       <meta charSet="utf-8" />
       <title>CodindevMain</title>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/css/uikit.min.css" />
       <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.10/dist/js/uikit.min.js"></script>
       <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.10/dist/js/uikit-icons.min.js"></script>
       <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
      </Helmet>

      <div className="head">
      virkar að pusha to github
      </div>{/* .head */}

      <BrowserRouter>
      <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={SignUp} />
      </Routes>
      </BrowserRouter>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))