import "./App.css"
import Header from "./shared/Header/Header"
import { Route, Routes } from "react-router-dom"
import Blogs from "./pages/Blogs/Blogs"
import BlogDetails from "./pages/BlogDetails/BlogDetails"

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Blogs />}></Route>
				<Route
					path="/blog/:id"
					element={<BlogDetails></BlogDetails>}
				></Route>
			</Routes>
		</div>
	)
}

export default App
