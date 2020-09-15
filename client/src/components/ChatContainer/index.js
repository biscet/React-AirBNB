import React, { Component } from 'react';
import './ChatContainer.scss';
import openSocket from 'socket.io-client';

import Header from '../Header';
import ChatWindow from '../ChatWindow';
import Footer from '../Footer';

class ChatContainer extends Component {
    state = {
        socket: null,
        messages: [],
        verticalPopapp: false,
        popAppData: null
    }

    componentDidMount() {
        const { id } = this.props.user;
        if (!this.state.socket && id) {
            const socket = openSocket('http://localhost:3000', { query: { id: id } });
            socket.on('message', this.onMessageReceived);
            socket.on('carousel', this.onMessageReceived);
            socket.on('button', this.onMessageReceived);
            this.setState({
                socket: socket
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.user.id !== prevProps.user.id && !this.state.socket) {
            const socket = openSocket('http://localhost:3000', { query: { id: this.props.user.id } });
            socket.on('message', this.onMessageReceived);
            socket.on('carousel', this.onMessageReceived);
            socket.on('button', this.onMessageReceived);
            this.setState({
                socket: socket
            })
        }
    }

    popAppMenuOpen = () => {
        this.setState({
            verticalPopapp: true,
            popAppData: { footerMenu: true }
          })
    }

    popAppOpen = data => {
        this.setState({
          verticalPopapp: true,
          popAppData: data
        })
    }

    popAppClose = () => {
        this.setState({
            verticalPopapp: false
          })
    } 

    onMessageReceived = data => {
        this.setState({ messages: this.state.messages.concat(data) })
    }

    sendMessage = (text) => {
        const { socket, messages } = this.state;
        let taxiPlace = messages[messages.length - 1];

        if (taxiPlace.trigger === 'destination') {
            socket.emit('message', {
                text,
                payload: 'DESTINATION'
            });
        } else if (!this.props.user.room && messages.length === 3) {
            socket.emit('message', {
                text,
                payload: 'ROOM'
            });
        } else {
            socket.emit('message', { text });
        }
    }

    sendButton = (body) => {
        this.state.socket.emit('button', body);
    }

    render() {
        const {
            popAppData,
            verticalPopapp
        } = this.state;

        return (
            <div className="chat">
                <Header />
                <ChatWindow isAuth={this.props.isAuth}
                    messages={ this.state.messages }
                    sendButton={ this.sendButton }
                    popAppData={ popAppData }
                    verticalPopapp={ verticalPopapp }
                    popAppOpen= { this.popAppOpen }
                    popAppClose= { this.popAppClose }
                />
                <Footer sendMessage={ this.sendMessage }
                    popAppOpen={ this.popAppMenuOpen }
                />
            </div>
        )
    }
}

export default ChatContainer;
