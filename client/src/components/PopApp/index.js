import React, { Component } from 'react';
import MapMessage from '../MapMessage';
import './Popapp.scss';
import logo from '../Header/logo.png';

class PopApp extends Component {
    state = {
        isMap: false
    }

    render() {
        const {
            data,
            onClose
        } = this.props;

        const { isMap } = this.state;

        return (
            <div className='popApp'>
                <header>
                    <button className='popApp-btn'
                        onClick={ onClose }
                    >
                        <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g>
                                <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/>
                            </g>
                        </svg>
                    </button>

                    <img className='popApp-logo' src={logo} alt='logo' />

                    <button className='popApp-btn'
                        onClick={ onClose }
                    >
                        <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g>
                                <path fill="#1D1D1B" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
                            </g>
                        </svg>
                    </button>
                </header>

                {
                    data && data.footerMenu
                        ? <section className='footerMenuPopApp'>
                            <div className='menuItem '>
                                <h2>About Me Bot</h2>
                                <div className='menuItem_about'>
                                    "Me" Chatbot is the most efficient virtual assistance for Hotels. Enchance the guest experience
                                </div>
                                <a
                                    className='chat-btn-item popApp-footer-btn'
                                    href='https://replye.com/service/'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    More Info
                                </a>
                            </div>
                            <div className='menuItem '>
                                <h2>Need a Me Bot?</h2>
                                <div className='menuItem_about'>
                                    What are some challenges your business is currently facing? Let us know.
                                </div>
                                <a
                                    className='chat-btn-item popApp-footer-btn'
                                    href='https://replye.com/contact/'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    Contact us
                                </a>
                            </div>
                        </section>
                        : <section style={{ height: 'calc(100% - 50px)', position: 'relative' }}>
                        {
                            isMap
                                ? <MapMessage location={ data.location } />
                                : <>
                                    <div className='popApp-image'
                                        style={{backgroundImage: `url(http://127.0.0.1:3000/static/${data.image})`}}
                                    />
    
                                    <div className='popApp-head'>
                                        <h4 className='popApp-head-title'>{data.title}</h4>
    
                                        <span className='popApp-head-recommendation'>{data.recommend}</span>
                                    </div>
                                    <div className='popApp-about'>
                                        <div className='food-type popApp_text'>{data.restaurant}</div>
                                        <div className='opening-hours popApp_text'>Opens: {data.opens}</div>
                                        <div className='price popApp_text'>Price: {data.price}</div>
                                    </div>
                                    
                                    <div className='popApp-description'>
                                        <p className='popApp-description-text'>
                                            {data.description}
                                        </p>
                                        
                                        <button className='chat-btn-item popApp-footer-btn'
                                            onClick={() => {
                                                this.setState({
                                                    isMap: true
                                                })
                                            }}
                                        >
                                            Want eat here?
                                        </button>
                                    </div>
                                </>
                        }
                        
                    </section>
                }

               
            </div>
        )
    }
}

export default PopApp;
