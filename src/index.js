import createMenu from './menu/menu';
var menu = createMenu(['Home','Portfolio', 'Contacts'], 'menu');
document.body.appendChild(menu);

console.log('Hello Index');