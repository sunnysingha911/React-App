import React from 'react';
import './assets/css/card.css';

function Card(){
    return(
        <div className="card-block">
                {/* Card 1 */}
                <div className="card">
                    <div className="card-image"></div>
                    <div className="card-text">
                        <span className="date">4 days ago</span>
                        <h2>Post One</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="card-stats">
                        <div className="stat">
                            <div className="value">4<sup>m</sup></div>
                            <div className="type">read</div>
                        </div>
                        <div className="stat border">
                            <div className="value">5123</div>
                            <div className="type">views</div>
                        </div>
                        <div className="stat">
                            <div className="value">32</div>
                            <div className="type">comments</div>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="card card-md">
                    <div className="card-image"></div>
                    <div className="card-text">
                        <span className="date">2 days ago</span>
                        <h2>Post Two</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="card-stats">
                        <div className="stat">
                            <div className="value">3.5<sup>m</sup></div>
                            <div className="type">read</div>
                        </div>
                        <div className="stat border">
                            <div className="value">5113</div>
                            <div className="type">views</div>
                        </div>
                        <div className="stat">
                            <div className="value">20</div>
                            <div className="type">comments</div>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="card">
                    <div className="card-image"></div>
                    <div className="card-text">
                        <span className="date">8 days ago</span>
                        <h2>Post Three</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="card-stats">
                        <div className="stat">
                            <div className="value">4.5<sup>m</sup></div>
                            <div className="type">read</div>
                        </div>
                        <div className="stat border">
                            <div className="value">9123</div>
                            <div className="type">views</div>
                        </div>
                        <div className="stat">
                            <div className="value">56</div>
                            <div className="type">comments</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Card;