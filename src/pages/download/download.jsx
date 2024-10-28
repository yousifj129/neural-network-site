import React from 'react';

export const Download = () => {
    return (
        <div>
            <h1>Download Page</h1>
            <button onClick={downloadSomething}>Download</button>
        </div>
    );
}

function downloadSomething(){
    //take someone to a download link
    window.location.href="https://github.com/yousifj129/NeuralNetworkCreator/releases/download/v0.0.1/NeuralNetworkCreator.exe";
}