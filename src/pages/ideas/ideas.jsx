import React from 'react';
import { IDEAS } from '../../ideas';
export const Ideas = () => {
    return (
        <div>
            <h1>random things page</h1>
            <div className='ideas'> {IDEAS.map(idea => <div key={idea.id}><a href={idea.link}>{idea.title}</a> <p>{idea.description}</p></div>)}</div>
        </div>
    );
}