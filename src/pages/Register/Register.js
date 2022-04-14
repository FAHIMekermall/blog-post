import React, { useState } from "react"
import "../Login/Login.css"
import { GrFormViewHide, GrView } from "react-icons/gr"
import { Link, Navigate } from "react-router-dom"
import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from "react-firebase-hooks/auth"
import auth from "../../firebase.init"
import SocialLogin from "../../shared/SocialLogin/SocialLogin"
import Spinner from "../../shared/Spinner/Spinner"

const Register = () => {
	const [passWordShow, setPasswordShow] = useState(false)
	const [name, setName] = useState({ value: "", error: "" })
	const [number, setNumber] = useState({ value: "", error: "" })
	const [password, setPassword] = useState({ value: "", error: "" })
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
	const [updateProfile] = useUpdateProfile(auth)
	const [confirmPassword, setConfirmPassword] = useState({
		value: "",
		error: "",
	})
	if(loading){
		return <Spinner></Spinner>
	}
	if(user){
		return <Navigate to='/profile'></Navigate>
	}
	const handleNameInput = (event) => {
		const namePart = event.target.value.split(" ")
		if (namePart.length < 2) {
			setName({
				value: "",
				error: "Name must contain at least 2 characters",
			})
		} else if (namePart[namePart.length - 1] === "") {
			setName({
				value: "",
				error: "Name must contain at least 2 characters",
			})
		} else if (/[a-z]/.test(event.target.value[0])) {
			setName({
				value: "",
				error: "First Name Name must start with capital letter",
			})
		} else if (/[a-z]/.test(namePart[namePart.length - 1][0])) {
			setName({
				value: "",
				error: "last Name must start with capital letter",
			})
		} else {
			setName({ value: event.target.value, error: "" })
		}
		if (event.target.value === "") {
			setName({ value: "", error: "" })
		}
	}
	const handlePasswordInput = (event) => {
		if (event.target.value.length < 8) {
			setPassword({ value: "", error: "Password too short" })
		} else if (
			/[a-z]/.test(event.target.value) &&
			!/[A-Z]/.test(event.target.value)
		) {
			setPassword({
				value: "",
				error: "You need minimum 1 uppercase letter",
			})
		} else if (
			!/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(
				event.target.value
			)
		) {
			setPassword({
				value: "",
				error: "You need minimum 1 special characters",
			})
		} else {
			setPassword({ value: event.target.value, error: "" })
		}
		if (event.target.value === "") {
			setPassword({ value: "", error: "" })
		}
	}
	const handleConfirmPasswordInput = (event) => {
		if (password.value !== event.target.value) {
			setConfirmPassword({ value: "", error: "Password mismatch" })
		} else {
			setConfirmPassword({ value: event.target.value, error: "" })
		}
		if (event.target.value === "") {
			setConfirmPassword({ value: "", error: "" })
		}
	}
	const handleNumberInput = (event) => {
		const first2 = event.target.value.slice(0, 2)
		if (first2 !== "01") {
			setNumber({
				value: "",
				error: "Only bangladeshi number's is available",
			})
		} else if (event.target.value.length != 11) {
			setNumber({ value: "", error: "Your number must be 11 digit" })
		} else {
			setNumber({ value: event.target.value, error: "" })
		}
		if (event.target.value === "") {
			setNumber({ value: "", error: "" })
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const email = e.target.email.value
		await createUserWithEmailAndPassword(email, confirmPassword.value)
		await updateProfile({ displayName: name.value })
	}

	return (
		<>
			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<h1 style={{ fontFamily: "monospace" }}>Create account</h1>
					<input
						onChange={handleNameInput}
						type="text"
						name="Name"
						id="name"
						placeholder="Name"
						required
					/>
					{name.error && (
						<small className="error">{name.error}</small>
					)}
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						required
					/>
					<input
						onChange={handleNumberInput}
						placeholder="Phone number"
						type="number"
						name="phone"
						id="phone"
						required
					/>
					{number.error && (
						<small className="error">{number.error}</small>
					)}
					<p className="password-container">
						<input
							onChange={handlePasswordInput}
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
					{password.error && (
						<small className="error">{password.error}</small>
					)}
					<p className="password-container">
						<input
							onChange={handleConfirmPasswordInput}
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
					{confirmPassword.error && (
						<small className="error">{confirmPassword.error}</small>
					)}
					<input type="submit" id="submit" value="Register" />
					<p className="redirect-register">
						<span>Already have an account?</span>{" "}
						<Link to="/login">Log in</Link>
					</p>
					{error && error.message}
				</form>
			</div>
			<SocialLogin />
		</>
	)
}

export default Register
