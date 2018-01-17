import Block from '../block';

import template from './button.pug';

export default class Button extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = template({
            text: this.options.text
        });
    }

}
