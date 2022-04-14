import React from "react"
import auth from "../../firebase.init"
import "./SocialLogin.css"
import {
	useSignInWithFacebook,
	useSignInWithGithub,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth"
import { Button } from "@mui/material"

const SocialLogin = () => {
	const [signInWithGoogle] = useSignInWithGoogle(auth)
	const [signInWithFacebook] = useSignInWithFacebook(auth)
	const [signInWithGithub] = useSignInWithGithub(auth)
	return (
		<>
			<div className="or-container">
				<div></div>
				<div>or</div>
				<div></div>
			</div>
			<div className="social-login">
				<div className="social-login-button-container">
					<Button
						onClick={() => signInWithGithub()}
						variant="contained"
						color="primary"
					>
						Continue with github
					</Button>
					<Button
						onClick={() => signInWithGoogle()}
						variant="contained"
						color="primary"
					>
						Continue with google
					</Button>
					<Button
						onClick={() => signInWithFacebook()}
						variant="contained"
						color="primary"
					>
						Continue with facebook
					</Button>
				</div>
			</div>
		</>
	)
}

export default SocialLogin
