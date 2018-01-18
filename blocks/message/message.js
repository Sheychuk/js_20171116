import Block from '../block';

import template from './message.pug';

export default class Message extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = template({
            isSend: this.options.isSend,
            user: this.options.user,
            message: this.options.message
        });
    }

}

