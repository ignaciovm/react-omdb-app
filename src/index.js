

import React from "react";
import ReactDOM from "react-dom";

import 'bootswatch/dist/lux/bootstrap.min.css'

import List from "./containers/List";

const App = () => {
  return (
    <>
      <div className="navbar navbar-dark bg-dark border-bottom border-white">
        <a href="/" className="navbar-brand">
          React OMDB App
        </a>
      </div>
      <main className="bg-dark">
        <div className="container">
          <List/>

        </div>
      </main>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))