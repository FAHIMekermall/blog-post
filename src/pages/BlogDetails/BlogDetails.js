import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useBlogs from "../../hooks/useBlogs/useBlogs"
import Spinner from "../../shared/Spinner/Spinner"
import "./BlogDetails.css"

const BlogDetails = () => {
	const { id } = useParams()
	const [blogs] = useBlogs()
	const [post, setPost] = useState({})
	const navigate = useNavigate()
	useEffect(() => {
		if (blogs) {
			const item = blogs.find((blog) => blog._id === id)
			setPost(item)
		}
	}, [blogs])
	return (
		<div>
			{post ? (
				<div>
					<div className="blog-details-header">
						<Button
							onClick={() => navigate(-1)}
							variant="contained"
							color="info"
							style={{ height: "100%" }}
						>
							Back
						</Button>
						<h3>{post?.title?.slice(0, 50)}</h3>
					</div>
					<div className="blog-details-container">
						<img src={post?.imageURL} alt="" />
						<h2>{post?.title}</h2>
						<p>{post?.blog}</p>
					</div>
				</div>
			) : (
				<div>
                    <Spinner></Spinner>
                </div>
			)}
		</div>
	)
}

export default BlogDetails
