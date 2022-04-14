import React from "react"
import useBlogs from "../../hooks/useBlogs/useBlogs"
import Blog from "../Blog/Blog"
import "./Blogs.css"

const Blogs = () => {
	const [blogs] = useBlogs()
	return (
		<div>
			<p>{blogs?.length}</p>
			<div className="blogs">
				{blogs.map((blog) => (
					<Blog key={blog._id} blog={blog}></Blog>
				))}
			</div>
		</div>
	)
}

export default Blogs
