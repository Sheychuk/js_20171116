import Block from '../block';

import template from './textarea.pug';

export default class Textarea extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = template({
            rows: this.options.rows,
            placeholder: this.options.placeholder
        });
    }

}

