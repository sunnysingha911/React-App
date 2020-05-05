import React from 'react';
import './assets/css/row3.css';
function Row2(){
    return(
        <div className="row-3">
            <img src={require("./assets/images/side2.png")} alt="SomeImage"/>
            <div className="row-3-l1">
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptatem, libero provident eveniet quidem dicta!</p>
                <div className="list">
                    <li><i className="fa fa-deaf fa-2x" aria-hidden="true"></i>Lorem, ipsum.</li>
                    <li><i className="fa fa-fighter-jet fa-2x" aria-hidden="true"></i>Lorem, ipsum dolor.</li>
                    <li><i className="fa fa-cog fa-2x" aria-hidden="true"></i>Lorem ipsum dolor sit.</li>
                </div>
            </div>
        </div>
    );
}
export default Row2;
