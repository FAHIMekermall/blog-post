import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useBlogs from "../../hooks/useBlogs/useBlogs"
import './BlogDetails.css'

const BlogDetails = () => {
	const { id } = useParams()
	const [blogs] = useBlogs()
	const [post, setPost] = useState({})
	useEffect(() => {
		if (blogs) {
			const item = blogs.find((blog) => blog._id === id)
			setPost(item)
            console.log(item);
            console.log(id)
		}
	}, [blogs])
	return (
		<div className="blog-details-container">
            <img src={post?.imageURL} alt="" />
			<h2>{post?.title}</h2>
            <p>
                {post?.blog}
            </p>
		</div>
	)
}

export default BlogDetails
