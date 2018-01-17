import Block from '../block';
import Auth from '../auth/auth';
import template from './app.pug';

class App extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = template();

        let auth = new Auth(this.node.querySelector('.js-chat-footer'), {
            authorised: false
        });
        
        auth.render();
    }

}

window.addEventListener('DOMContentLoaded', () => {
    let app = new App(document.querySelector('.js-app'));
    app.render();
});

