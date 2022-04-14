import "./App.css"
import Header from "./shared/Header/Header"
import { Route, Routes } from "react-router-dom"
import Blogs from "./pages/Blogs/Blogs"
import BlogDetails from "./pages/BlogDetails/BlogDetails"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Profile from "./pages/Profile/Profile"
import RecquireAuth from "./utils/RecquireAuth/RecquireAuth"

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
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path='/profile' element={
					<RecquireAuth>
						<Profile />
					</RecquireAuth>
				}></Route>
			</Routes>
		</div>
	)
}

export default App
