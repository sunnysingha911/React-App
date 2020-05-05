import React from 'react';
import './assets/css/row2.css';
function Row2(){
    return(
        <div className="row-2">
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat quo eos unde nostrum autem obcaecati illum at qui maiores vitae deleniti, amet laudantium delectus?</p>
            <div className="row-2-l1">
                <div className="row-2-l2">
                    <h2>Lorem, ipsum.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ducimus aperiam, perspiciatis quos accusamus architecto exercitationem consequuntur impedit, tenetur fugiat vitae voluptatibus cupiditate. Accusantium, quisquam.</p>                
                    <h2>Lorem, ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, odit!</p>
                </div>
                <img src={require("./assets/images/side.png")} alt="SomeImage"/>
            </div>
        </div>
    );
}
export default Row2;
