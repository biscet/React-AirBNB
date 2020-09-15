import React, { Component } from 'react';
import './ChatWindow.scss';

import Messages from '../Messages';
import PopApp from '../PopApp';

class ChatWindow extends Component {
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
      
      componentDidMount() {
        this.scrollToBottom();
      }
      
      componentDidUpdate() {
        this.scrollToBottom();
      }    

    render() {
        const {
            messages,
            sendButton,
            popAppData,
            verticalPopapp,
            popAppOpen,
            popAppClose,
        } = this.props;

        return (
            <div className='chatWindow'>
                <div className='messages-content'>
                    {
                        messages.map((el, index) => 
                            <Messages data={ el }
                                key={ index }
                                popAppClick={ popAppOpen }
                                sendButton={ sendButton }
                            />
                        )
                    }

                    {
                        verticalPopapp &&
                            <PopApp data={ popAppData }
                                verticalPopapp={ verticalPopapp }
                                onClose={ popAppClose }
                            />
                    }

                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatWindow;
