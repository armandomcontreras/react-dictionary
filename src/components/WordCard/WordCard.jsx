import React from 'react';
import './WordCard.css';

export default function WordCard({en, de}) {
    return (
        <div className="word-card">
            <p>English: {en}</p>
            <p>German: {de}</p>

        </div>
    )
}

