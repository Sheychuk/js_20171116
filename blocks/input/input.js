import Block from '../block';

import template from './input.pug';

export default class Input extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = this.node.innerHTML = template({
            value: this.options.value,
            placeholder: this.options.placeholder
        });
    }

}
