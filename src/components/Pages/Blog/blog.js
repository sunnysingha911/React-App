import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './assets/css/blog.css';

const Blog = ()=>{
    const [blogData,setBlogData] = useState([]);
    useEffect(()=>{
        Axios.get("https://newsapi.org/v2/everything?q=apple&from=2020-05-07&to=2020-05-07&sortBy=popularity&apiKey=f0d62bdd6c12476e974b4f16babcdd92")
        .then(res=>setBlogData([...blogData,...res.data.articles]));
    },[])
    console.log(blogData);
    return(
        <div className="blog">
            <h1>Blog</h1>
            <div className="blog-list">
                {
                    blogData.map(val=>(
                        <a href={val.url}>
                            <div key={Math.random()} className="single-blog">
                                <div className="title">
                                    <h2>{val.title.replace(/^(.{11}[^\s]*).*/, "$1")}</h2>
                                </div>
                                <img src={val.urlToImage} alt={val.title}/>
                                <div className="description">
                                    {val.content}
                                    <br/>
                                    <a href={val.url}>Read more..</a>
                                </div>        
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Blog;