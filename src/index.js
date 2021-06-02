// default libraries to user React components and render React Doc. Obj. Model
import React from 'react'
import ReactDOM from 'react-dom'
// modules
import { App, InitLayout } from "./App"
import reportWebVitals from "./reportWebVitals"
// another sources
import "./style/index.css"

ReactDOM.render(
	<React.StrictMode>
		<App/>
		<InitLayout/>
	</React.StrictMode>,
	document.getElementById("root")
)

/*
	if you want to start measuring performance in your app, pass a function
	to log results (for example: reportWebVitals(console.log))
	or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/
reportWebVitals()
