import Block from '../block';
import Button from '../button/button';
import Input from '../input/input';
import Textarea from '../textarea/textarea';

import template from './auth.pug';

export default class Auth extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        const { authorised } = this.options;
        
        this.node.innerHTML = template({
            authorised: authorised
        });

        let button = new Button(this.node.querySelector('.js-submit-name'), {
            text: 'Войти'
        });

        let input = new Input(this.node.querySelector('.js-name'), {
            value: '',
            placeholder: 'Введите имя'
        });

        let buttonMessage = new Button(this.node.querySelector('.js-submit'), {
            text: 'Отправить'
        });

        let textareaMessage = new Textarea(this.node.querySelector('.js-textarea'), {
            placeholder: 'Введите сообщение',
            rows: 5
        });

        button.render();
        input.render();
        textareaMessage.render();
        buttonMessage.render();
    }

}
