import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../services/blog";

function BlogScreen() {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=> {
        getBlogs().then(data => {
            setBlogs(data);
        })
    }, []);
    return <ul>
        
    </ul>;
}

export default BlogScreen;