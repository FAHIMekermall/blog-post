import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom"
import auth from "../../firebase.init"
import Spinner from "../../shared/Spinner/Spinner"

const RecquireAuth = ({ children }) => {
	const [user, loading] = useAuthState(auth)
	const location = useLocation()
    if(loading){
        return <Spinner></Spinner>
    }
	if (user) {
		return children
	} else {
		return (
			<Navigate to="/login" state={{ from: location }} replace></Navigate>
		)
	}
}

export default RecquireAuth
