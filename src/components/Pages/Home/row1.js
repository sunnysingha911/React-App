import React from 'react';
import './assets/css/row1.css';
function Row1(){
    return(
        <div className="row-1">
            <img src={require("./assets/images/side3.png")} alt="SomeImage"/>
            <h1>UI/UX .Dev</h1>
            <p>Developing UI and UX for better User Experience</p>
            <button>Let's Go</button>
        </div>
    );
}

export default Row1;