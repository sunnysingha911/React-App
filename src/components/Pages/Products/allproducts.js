import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import './assets/css/allproducts.css';

const AllProduct = () =>{
    const [image,setImage] = useState([]);
    useEffect(()=>{
        const apiRoot = "https://api.unsplash.com";
        const accessKey = process.env.REACT_APP_ACCESSKEY;
        Axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=12&query=computer`)
        .then(res=>setImage([...image,...res.data]))
    },[])
    return(
        <div className="new-product">
            <h1>All Products</h1>
            <div className="all-product-images">
                {image.map(val=>(
                    <div className="all-product-image">
                        <div className="all-product-image-top">
                            <h3>{val.alt_description===null?"No Data":val.alt_description.replace(/ .*/,'')}</h3>
                        </div>
                        <img src={val.urls.regular} alt={val.alt_description}/>
                        <div className="all-product-image-bottom">
                            <p>Rs. {Math.round((Math.random()*100))*1000}/-</p>
                            <p>Views: {val.views}</p>
                            <p>Description: </p>
                            <p>{val.alt_description} </p>
                        </div>
                    </div>    
                ))}
            </div>
            
        </div>
    )
}

export default AllProduct