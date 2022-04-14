import React, { useState } from "react"
import "./Login.css"
import { GrFormViewHide, GrView } from "react-icons/gr"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {
	useAuthState,
	useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth"
import auth from "../../firebase.init"
import Spinner from "../../shared/Spinner/Spinner"
import SocialLogin from "../../shared/SocialLogin/SocialLogin"

const Login = () => {
	const navigate = useNavigate()
	const locations = useLocation()
	const [user] = useAuthState(auth)
	const from = locations.state?.from?.pathname || "/"
	const [signInWithEmailAndPassword, , loading] =
		useSignInWithEmailAndPassword(auth)
	const [passWordShow, setPasswordShow] = useState(false)
	const handleLogin = (e) => {
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value
		signInWithEmailAndPassword(email, password)
	}
	if (loading) {
		return <Spinner></Spinner>
	}
	if (user) {
		navigate(from, { replace: true })
	}
	return (
		<>
			<div className="form-container">
				<form onSubmit={handleLogin}>
					<h1 style={{ fontFamily: "monospace" }}>Login</h1>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						required
					/>
					<p className="password-container">
						<input
							type={!passWordShow ? "Password" : "text"}
							name="password"
							id="password"
							placeholder="Password"
							required
						/>
						<span id="showPass">
							{passWordShow ? (
								<GrFormViewHide
									className="showButton"
									size={30}
									title="Show Pass"
									onClick={() =>
										setPasswordShow(!passWordShow)
									}
								></GrFormViewHide>
							) : (
								<GrView
									className="showButton"
									size={30}
									title="Show Pass"
									onClick={() =>
										setPasswordShow(!passWordShow)
									}
								></GrView>
							)}
						</span>
					</p>

					<input type="submit" id="submit" value="Login" />
					<p className="redirect-register">
						<span>Don't have a account?</span>{" "}
						<Link to="/register">Sign Up</Link>
					</p>
				</form>
			</div>
			<SocialLogin></SocialLogin>
		</>
	)
}

export default Login
