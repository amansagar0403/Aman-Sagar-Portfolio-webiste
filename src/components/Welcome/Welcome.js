import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
        <div className="welcome-container">
            <h1 className="welcome-text">Welcome</h1>
            <div className="scroll-arrow-container">
                <div className="scroll-arrow"></div>
            </div>
        </div>
    );
}

export default Welcome;
