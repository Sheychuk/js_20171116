import Block from '../block';
import Message from '../message/message';

import template from './chat.pug';

export default class Chat extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        const { authorised } = this.options;
        
        this.node.innerHTML = template();

        let message = new Message(this.node.querySelector('.js-chat'), {
            isSend: false,
            user: 'User Name',
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        });

        let message2 = new Message(this.node.querySelector('.js-chat'), {
            isSend: true,
            user: 'You',
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        });

        message.render();
        // message2.render();
    }

}
