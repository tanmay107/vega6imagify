import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Image.css';

export default function Image({ previewURL, webformatURL }) {
    console.log(webformatURL);
    let history = useHistory();

    const onButtonClick = e => {
        history.push({
            pathname: '/imageedit',
            state: webformatURL
        });
    }

    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img alt="image" src= {previewURL} />
            <div>
            <button className="button" onClick={onButtonClick} >Add Caption</button>
            </div>                    
        </div>
    );
}
