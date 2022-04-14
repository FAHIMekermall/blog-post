import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Header.css"
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"
import { Button } from "@mui/material"
import { signOut } from "firebase/auth"

const Header = () => {
	const [user, loading, error] = useAuthState(auth)
	const [signInWithGoogle] = useSignInWithGoogle(auth)
	return (
		<header>
			<nav>
				<Link className="header-title" to="/">
					The daily tech
				</Link>
			</nav>
			<nav>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "active-link" : ""
						}
						to="/"
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "active-link" : ""
						}
						to="/news"
					>
						News
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "active-link" : ""
						}
						to="/profile"
					>
						Profile
					</NavLink>
				</li>
				<li>
					{!user ? (
						<NavLink
							className={({ isActive }) => {
								return isActive ? "active-link" : ""
							}}
							to="/login"
						>
							Signin
						</NavLink>
					) : (
						<Button
							onClick={() => signOut(auth)}
							variant="outlined"
							color="error"
						>
							SignOut
						</Button>
					)}
				</li>
			</nav>
		</header>
	)
}

export default Header
