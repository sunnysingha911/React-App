import React from 'react';
import Row1 from './row1';
import Row2 from './row2';
import Row3 from './row3';
import Card from './card';

function Home(){
    return(
        <div className="body">
            <Row1 />
            <Row2 />
            <Row3 />
            {/* <Row3 /> */}
            {/* <Card /> */}
        </div>
    );
}
export default Home;