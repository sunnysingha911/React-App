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
            <div className="new-products-container">
                <div className="new-products-slide">
                    <ul>
                        {image.map(val=>(
                            <li>
                                <div className="new-product-card">
                                    <div className="new-product-card-upper">{val.alt_description===null?"No Data":val.alt_description.replace(/ .*/,'')}</div>
                                    <img src={val.urls.thumb} alt={val.alt_description}/>
                                    <div className="new-product-card-lower">Rs. {Math.round((Math.random()*100))*1000}/-</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NewProduct