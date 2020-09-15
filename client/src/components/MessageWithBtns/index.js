import React from 'react'

const MessageWithBtns = ({ data, sendButton }) => {
    const setStars = num => {
        let stars = '';
        for (let i = 0; i < num; i++ ) {
            stars = stars + '⭐';
        }
        return stars;
    }

    return (
        <>
            <button className='chat-bot-user' />
                {
                    data.feedbacks
                        ? <>
                            {
                                data.feedbacks.map((el, i) =>
                                    <div className='message-container basic-template'
                                        key={i}
                                    >
                                        <div className='buttons-card'>
                                            {
                                                el.stars &&
                                                    <div className='stars' style={{ marginTop: '10px' }}>
                                                        <span>
                                                            Rate: { setStars(el.stars) }
                                                        </span>
                                                    </div>
                                            }

                                            {
                                                el.name &&
                                                    <div className='title'>
                                                        <h4>
                                                            {el.name}
                        
                                                            {
                                                                el.feedback &&
                                                                    <span> {el.feedback}</span>
                                                            }
                                                        </h4>
                                                    </div>
                                            }

                                            <div className='chat-btn-list'>
                                                {
                                                    el.buttons &&
                                                        el.buttons.map((btn, i) =>
                                                            <>
                                                                {
                                                                    btn.type === "LINK"
                                                                        ? <a key={i} 
                                                                            className='chat-btn-item'
                                                                            href={btn.link}
                                                                        >
                                                                            {btn.title}
                                                                        </a>
                                                                        : <button key={i} 
                                                                            className='chat-btn-item'
                                                                            onClick={() => sendButton(btn)}
                                                                        >
                                                                            {btn.title}
                                                                        </button>
                                                                }
                                                            </> 
                                                        )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                        : <div className='message-container basic-template'>
                            <div className='buttons-card'>
                                {
                                    data.image &&
                                        <div className='buttons-card-image'
                                            style={{backgroundImage: `url(http://127.0.0.1:3000/static/${data.image})`}}
                                        />
                                }
            
                                {
                                    data.title &&
                                        <div className='title'>
                                            <h4>
                                                {data.title}
            
                                                {
                                                    data.description &&
                                                        <span style={{ fontSize: '16px', lineHeight: '1' }}> {data.description}</span>
                                                }
                                            </h4>
                                            
                                        </div>
                                }
            
                                {
                                    data.restaurant &&
                                        <div className='restaurant'>
                                            <span>{data.restaurant}</span>
                                        </div>
                                }
            
                                {
                                    data.stars &&
                                        <div className='stars'>
                                            <span>
                                                Rate: { setStars(data.stars) }
                                            </span>
                                        </div>
                                }
            
                                {
                                    data.opens &&
                                        <div className='buttons-card-opens'>
                                            <div className='buttons-card-opens-title'>
                                                Hours:
                                            </div>
            
                                            {
                                                data.opens.map((el, i) => 
                                                    <div className='buttons-card-opens-item'
                                                        key={i}
                                                    >
                                                        {el}
                                                    </div>
                                                )
                                            }
                                            
                                        </div>
                                        
                                }
            
                                {
                                    data.text &&
                                        <div className='text'>
                                            <p>{data.text}</p>
                                        </div>
                                }

                                <div className='chat-btn-list'>
                                    {
                                        data.buttons &&
                                            data.buttons.map((btn, i) =>
                                                <>
                                                    {
                                                        btn.type === "LINK"
                                                            ? <a key={i} 
                                                                className='chat-btn-item'
                                                                href={btn.link}
                                                                target='_blank'
                                                                rel="noopener noreferrer"
                                                            >
                                                                {btn.title}
                                                            </a>
                                                            : <button key={i} 
                                                                className='chat-btn-item'
                                                                onClick={() => sendButton(btn)}
                                                            >
                                                                {btn.title}
                                                            </button>
                                                    }
                                                </> 
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                }
        </>
    )
}

export default MessageWithBtns;