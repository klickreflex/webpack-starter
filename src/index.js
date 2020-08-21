import _ from 'lodash';
import './styles/style.pcss';
import 'lazysizes';
import './templates/index.njk';
import './templates/components/card.njk';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;

}

document.body.appendChild(component());
