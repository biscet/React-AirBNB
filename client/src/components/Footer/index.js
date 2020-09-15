import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    state = {
        menuIsOpen: false,
        input: ''
    }

    sendMessage = data => {
        if (this.state.input.length !== 0 || data) {
            this.props.sendMessage(data)
        }

        this.setState({
            input: ''
        })
    }

    render() {
        const { menuIsOpen } = this.state;
        const { popAppOpen } = this.props;

        return (
            <div className='footer'>
                <div className='footer-menu'>
                    <div className={`burger-menu slide-in ${menuIsOpen ? '' : 'out'}`}>
                        <button className="chat-btn-item menu-list"
                            value='About'
                            onClick={(el) => this.sendMessage(el.target.value)}
                        >
                            About
                        </button>

                        <button className="chat-btn-item menu-list"
                            value='Help'
                            onClick={(el) => this.sendMessage(el.target.value)}
                        >
                            Help
                        </button>

                        <button className="chat-btn-item menu-list"
                            value='Contacts'
                            onClick={(el) => this.sendMessage(el.target.value)}
                        >
                            Contacts
                        </button>
                    </div>

                    <div className='footer-burger footer-item'
                        onClick={() => popAppOpen()}
                    >
                        <i className="fas fa-bars" />
                    </div>

                    <div className='footer-photo footer-item footer-disabled'>
                        <svg width="90%" height="90%" viewBox="0 0 100 100" xmlSpace="preserve">
                            <path d="M50,40c-8.285,0-15,6.718-15,15c0,8.285,6.715,15,15,15c8.283,0,15-6.715,15-15
                                C65,46.718,58.283,40,50,40z M90,25H78c-1.65,0-3.428-1.28-3.949-2.846l-3.102-9.309C70.426,11.28,68.65,10,67,10H33
                                c-1.65,0-3.428,1.28-3.949,2.846l-3.102,9.309C25.426,23.72,23.65,25,22,25H10C4.5,25,0,29.5,0,35v45c0,5.5,4.5,10,10,10h80
                                c5.5,0,10-4.5,10-10V35C100,29.5,95.5,25,90,25z M50,80c-13.807,0-25-11.193-25-25c0-13.806,11.193-25,25-25
                                c13.805,0,25,11.194,25,25C75,68.807,63.805,80,50,80z M86.5,41.993c-1.932,0-3.5-1.566-3.5-3.5c0-1.932,1.568-3.5,3.5-3.5
                                c1.934,0,3.5,1.568,3.5,3.5C90,40.427,88.433,41.993,86.5,41.993z"
                            />
                        </svg>
                    </div>

                    <div className='footer-photo footer-item footer-disabled'>
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                            width="100%" height="100%" viewBox="0 0 548.176 548.176" style={{enableBackground:'new 0 0 548.176 548.176'}}
                            xmlSpace="preserve"
                        >

                            <g>
                                <path d="M534.75,68.238c-8.945-8.945-19.694-13.417-32.261-13.417H45.681c-12.562,0-23.313,4.471-32.264,13.417
                                    C4.471,77.185,0,87.936,0,100.499v347.173c0,12.566,4.471,23.318,13.417,32.264c8.951,8.946,19.702,13.419,32.264,13.419h456.815
                                    c12.56,0,23.312-4.473,32.258-13.419c8.945-8.945,13.422-19.697,13.422-32.264V100.499
                                    C548.176,87.936,543.699,77.185,534.75,68.238z M511.623,447.672c0,2.478-0.899,4.613-2.707,6.427
                                    c-1.81,1.8-3.952,2.703-6.427,2.703H45.681c-2.473,0-4.615-0.903-6.423-2.703c-1.807-1.813-2.712-3.949-2.712-6.427V100.495
                                    c0-2.474,0.902-4.611,2.712-6.423c1.809-1.803,3.951-2.708,6.423-2.708h456.815c2.471,0,4.613,0.905,6.42,2.708
                                    c1.801,1.812,2.707,3.949,2.707,6.423V447.672L511.623,447.672z"/>
                                <path d="M127.91,237.541c15.229,0,28.171-5.327,38.831-15.987c10.657-10.66,15.987-23.601,15.987-38.826
                                    c0-15.23-5.333-28.171-15.987-38.832c-10.66-10.656-23.603-15.986-38.831-15.986c-15.227,0-28.168,5.33-38.828,15.986
                                    c-10.656,10.66-15.986,23.601-15.986,38.832c0,15.225,5.327,28.169,15.986,38.826C99.742,232.211,112.683,237.541,127.91,237.541z
                                    "/>
                                <polygon points="210.134,319.765 164.452,274.088 73.092,365.447 73.092,420.267 475.085,420.267 475.085,292.36 356.315,173.587 
                                            "/>
                            </g>

                        </svg>
                    </div>

                    <div className='footer-photo footer-item footer-disabled'>
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 286.374 286.374" style={{enableBackground:'new 0 0 286.374 286.374'}} xmlSpace="preserve"
                        >
                            <g>
                                <path d="M143.187,187.933c32.126,0,58.17-26.043,58.17-58.17V58.17
                                    c0-32.126-26.044-58.17-58.17-58.17c-32.126,0-58.17,26.043-58.17,58.17v71.594C85.017,161.89,111.061,187.933,143.187,187.933z
                                    M246.103,102.916c0-7.414-6.011-13.424-13.424-13.424c-7.414,0-13.424,6.01-13.424,13.424c0,0.612,0.101,1.196,0.18,1.787
                                    c-0.115,0.85-0.18,1.742-0.18,2.688v26.848c0,39.474-33.576,71.54-74.788,71.54c-41.214,0-77.348-32.066-77.348-71.54V107.39
                                    c0-0.757-0.114-1.447-0.237-2.13c0.135-0.764,0.237-1.541,0.237-2.344c0-7.414-6.01-13.424-13.424-13.424
                                    c-7.414,0-13.424,6.01-13.424,13.424c0,0.803,0.101,1.58,0.237,2.344c-0.123,0.683-0.237,1.373-0.237,2.13l-0.001,30.427
                                    c0,50.382,39.701,87.87,89.492,94.862v26.848H85.017c-0.797,0-1.519,0.114-2.242,0.225c-0.73-0.123-1.468-0.225-2.233-0.225
                                    c-7.414,0-13.424,6.01-13.424,13.424c0,7.414,6.01,13.424,13.424,13.424c0.765,0,1.503-0.102,2.233-0.225
                                    c0.723,0.111,1.445,0.225,2.242,0.225h116.34c0.797,0,1.519-0.114,2.241-0.225c0.73,0.123,1.468,0.225,2.233,0.225
                                    c7.414,0,13.424-6.01,13.424-13.424c0-7.414-6.009-13.424-13.424-13.424c-0.765,0-1.503,0.102-2.233,0.225
                                    c-0.723-0.111-1.444-0.225-2.241-0.225h-44.747v-26.848c49.792-6.992,89.492-44.48,89.492-94.862l0.001-30.427
                                    c0-0.767-0.113-1.476-0.232-2.179C246.002,104.462,246.103,103.702,246.103,102.916z"/>
                            </g>
                        </svg>
                    </div>

                    <input type='text' 
                        className='form-control text-input'
                        placeholder='Write a reply'
                        onChange={el => this.setState({
                            input: el.target.value
                        })}
                        value={this.state.input}
                        onKeyPress={el => el.key === 'Enter' ? this.sendMessage(el.target.value) : null }
                    />

                    <button className='footer-input input-send footer-item'
                        onClick={() => this.sendMessage(this.state.input)}
                    >
                        <svg id="icon-send" viewBox="0 0 32 32" width="90%" height="90%">
                            <path d="M0 0l32 16-32 16v-12.8l16-3.2-16-3.2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}

export default Footer;
