import React from "react"
import ReactDom from "react-dom"
import "./css/style.css"

// Importing FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css';
// Importing Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing Bootstrap JS (optional, if you need features like modals or tooltips)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importing custom Font Size
// import '@fontsource/poppins'; 

import App from "./App.js"


import { Provider } from "react-redux"
import  store  from "./store/index.js"
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

window.bootstrap = bootstrap;


// components


ReactDom.render(
    <Provider store={store}>
    <App/>
    </Provider>
    , 
    document.getElementById("root")
)

