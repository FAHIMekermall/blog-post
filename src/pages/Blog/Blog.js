import { Button } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import "./Blogs.css"

const Blog = ({ blog: { title, blog, imageURL, _id } }) => {
	const navigate = useNavigate()
	return (
		<div className="blog">
			<img src={imageURL} alt="" />
			<h2>{title.length > 40 ? `${title.slice(0, 40)}...` : title}</h2>
			<p>{blog.slice(0, 250)}</p>
			<Button
				onClick={() => navigate(`/blog/${_id}`)}
				variant="contained"
				color="secondary"
			>
				See details
			</Button>
		</div>
	)
}

export default Blog
