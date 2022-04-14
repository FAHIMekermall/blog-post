import { useEffect, useState } from "react"

const useBlogs = () => {
	const [blogs, setBlogs] = useState([])
	useEffect(() => {
		fetch("https://retro-tech-talks.herokuapp.com/blogs")
			.then((res) => res.json())
			.then((data) => setBlogs(data))
			.catch((err) => console.log(err))
	}, [])
	return [blogs, setBlogs]
}

export default useBlogs
