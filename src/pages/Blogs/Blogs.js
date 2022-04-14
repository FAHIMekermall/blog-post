import React from "react"
import useBlogs from "../../hooks/useBlogs/useBlogs"
import Blog from "../Blog/Blog"
import './Blogs.css'
import Spinner from '../../shared/Spinner/Spinner'

const Blogs = () => {
	const [blogs] = useBlogs()
    if(blogs.length === 0) {
        return <Spinner></Spinner>
    }
	return (
		<div>
			<div className="blogs">
				{blogs.map((blog) => (
					<Blog key={blog._id} blog={blog}></Blog>
				))}
			</div>
		</div>
	)
}

export default Blogs
