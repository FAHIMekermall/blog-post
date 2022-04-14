import logo from "./logo.svg"
import "./App.css"
import ReactDOM from "react-dom"
import Button from "@mui/material/Button"
import useBlogs from "./hooks/useBlogs/useBlogs"
import Header from "./shared/Header/Header"

function App() {
	const [blogs] = useBlogs()
	return (
		<div>
			<Header/>
		</div>
	)
}

export default App
