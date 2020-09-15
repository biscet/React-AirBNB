import React from 'react';

const SimpleMessage = ({text, type, popAppClick}) => {
    return (
        <>
            <button className='chat-bot-user'></button>
            <div className={`message-container basic-text ${type !== 'RESPONSE' ? 'basic-text_recive' : ''}`}>
                <span>{text}</span> 
            </div>
        </>
    )
}

export default SimpleMessage;