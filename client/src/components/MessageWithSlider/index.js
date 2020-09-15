import React, { Component } from 'react';
import ScrollMenu from "react-horizontal-scrolling-menu";
 
class MessageWithSlider extends Component {
    state = {
        screenWidth: null
    }

    componentDidMount() {
        this.setState({
            screenWidth: window.innerWidth
        })
        console.log(window.innerWidth)
    }

    getMenu = (data, sendButton) =>
        data.list.map((el, i) => {
            return (
                <div className='scroll-card_desktop' key={i}>
                    <button className='description'>
                        <div className='image'
                            style={{backgroundImage: `url(http://127.0.0.1:3000/static/${el.image})`}}
                        />

                        <h4 className='title'>{el.title}</h4>
                        <div className='subtitle'>{el.description}</div>
                    </button>

                    <div className='chat-btn-list'>
                        {
                            el.buttons.map((el,i) => <button key={i} className='chat-btn-item' onClick={() => sendButton(el)}>{el.title}</button>)
                        }
                    </div>
                </div>
            )
    })

    render() {
        const { data, sendButton } = this.props;
        const { screenWidth } = this.state;

        const menu = this.getMenu(data, sendButton);

        return (
            <>
                <button className='chat-bot-user'/>
    
                <div className={`message-container carusel-template ${ screenWidth < 800 ? `carusel-template_mobile` : '' }`}
                >
                    {
                        screenWidth > 800
                            ? <ScrollMenu data={menu}
                                translate={ 40 }
                            />
                            : <div className='scroll-container'>
                                <div className='scroll-wrapper'>
                                    {
                                        data.list.map((el, i) => 
                                            <div className={`scroll-card`} key={i}>
                                                <button className='description'>
                                                    <div className='image' style={{backgroundImage: `url(http://127.0.0.1:3000/static/${el.image})`}} />
            
                                                    <h4 className='title_mobile'>{el.title}</h4>
                                                    <p className='subtitle'>{el.description}</p>
                                                </button>
            
                                                <div className='chat-btn-list'>
                                                    {
                                                        el.buttons.map((el,i) => <button key={i} className='chat-btn-item' onClick={() => sendButton(el)}>{el.title}</button>)
                                                    }
                                                </div>
                                            </div>
                                        )
                                    } 
                                </div> 
                            </div>   
                    }
                             
                </div>
            </>
        )
    }
    
}
     



export default MessageWithSlider;