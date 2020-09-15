import React, { Component } from 'react';
import './Messages.scss';

import SimpleMessage from '../SimpleMessage';
import MessageWithSlider from '../MessageWithSlider';

import MessageWithBtns from '../MessageWithBtns';
import MessageVertical from '../MessageVertical';

class Messages extends Component {
    render() {
        const {
            data,
            popAppClick,
            sendButton
        } = this.props;

        let mes;
        switch(data.type) {
            case 'simple': mes = <SimpleMessage text={data.text} type={data.type} />; break;
            case 'carousel': mes = <MessageWithSlider data={data} sendButton={ sendButton } />; break;
            case 'buttons': mes = <MessageWithBtns data={data} sendButton={ sendButton } />; break;
            case 'varicalCarusel': mes = <MessageVertical data={data} popAppClick={ popAppClick } sendButton={ sendButton } />; break;           
            default: break;
        }

        return (
            <div className={`message ${ 
                data.typeMessage && data.typeMessage === "RESPONSE" 
                    ? 'message-sent'
                    : 'message-recive'
                }`}
            >
                { mes }
            </div>
        )
    }
}

export default Messages;
