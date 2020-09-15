import React from 'react'

const MessageVertical = ({ data, popAppClick }) => {
    return (
        <>
            <button className='chat-bot-user' />

            <div className='message-container vertical-carusel-template'>
                {
                    data.list.map((el, i) => 
                        <div className='vertical-card'
                            key={i}
                        >
                            <div className='vertical-card-description'>
                                <h4 className='title'>{el.title}</h4>
                                <div className='food-type vertical-card_text'>{el.restaurant}</div>
                                <div className='opening-hours vertical-card_text'>{el.opens}</div>
                                <div className='price vertical-card_text'>{el.price}</div>

                                {
                                    el.buttons.map((btn, j) => 
                                        <button className='chat-btn-item vertical-card-btn'
                                            onClick={ () => popAppClick(
                                                {...el, recommend: 
                                                    (
                                                        i === 1 
                                                            ? 'Hotel recommended'
                                                            : 'Guest recommended' 
                                                    )
                                                }
                                            )}
                                            key={j}
                                        >
                                            {btn.title}
                                        </button>
                                    )
                                }
                            </div>

                            <div className='vertical-card-image'>
                                <div className='vertical-card-image_pic'
                                    style={{backgroundImage: `url(http://127.0.0.1:3000/static/${el.image})`}}
                                    onClick={ () => popAppClick(el) }
                                />

                                <span className='vertical-card-recommendation'>
                                    {
                                        i === 1 
                                            ? 'Hotel recommended'
                                            : 'Guest recommended'
                                    }
                                </span>
                            </div>
                                
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default MessageVertical;