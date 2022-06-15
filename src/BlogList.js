import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            <h1>
                {title}
            </h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written By-{blog.author}</p>
                    </Link>

                    {/* <button onClick={() => {
                        handleDelete(blog.id)
                    }}>Delete Blog</button> */}
                </div>
            ))}
        </div>
    );
}

export default BlogList;

// line 11 -> link to particular blog when we click it with its particular id
// blogs/id is the thing we passed in route..