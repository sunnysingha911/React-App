import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import './assets/css/newproducts.css';

const NewProduct = ({url,key}) =>{
    const [image,setImage] = useState([]);
    useEffect(()=>{
        const apiRoot = "https://api.unsplash.com";
        const accessKey = process.env.REACT_APP_ACCESSKEY;
        Axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=7&query=iphone`)
        .then(res=>{console.log(res.data);setImage([...image,...res.data])})
    },[])
    return(
        <div className="new-product">
            <h1>New Products</h1>
            <div className="new-product-images">
                {image.map(val=>(
                    <div className="new-product-image">
                        
                        <img src={val.urls.thumb} alt={val.alt_description}/>
                    </div>    
                ))}
            </div>
            
        </div>
    )
}

export default NewProduct